import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { FeaturePartialState } from '../feature.state';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { fromStatisticAsyncActions } from './statistic-async.actions';

import { fromStatisticListQuery } from '../statistic-list/statistic-list.selectors';
import { AppFeatureFacade } from '@common/data-access';
import { TransactionModel } from '@common/models';
import { LoadTransactionService } from '@common/services';
import { map } from 'rxjs/operators';
import { fromStatisticListActions } from '../statistic-list/statistic-list.actions';
import { CreateStatisticModelService } from '@libs/statistic/utils/service/create-statistic-model.service';

@Injectable()
export class StatisticAsyncEffects {
    public readonly onLoad$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromStatisticAsyncActions.Load),
            concatLatestFrom(() => [
                this.store.pipe(select(fromStatisticListQuery.getMounth)),
                this.appFeatureFacade.currentUserId$,
            ]),
            switchMap(([action, mounth, userId]: [fromStatisticAsyncActions.Load, string, string | null]) => {
                if (!userId) {
                    return of(fromStatisticAsyncActions.LoadError({ massage: 'Please Log In' }));
                }

                return this.loadTransactionService.onLoad(userId, mounth).pipe(
                    switchMap((response: TransactionModel[]) => {
                        return [
                            fromStatisticAsyncActions.LoadSuccess({
                                models: this.createStatisticModelService.createStatisticItem(response),
                            }),
                        ];
                    }),
                    catchError(err => of(fromStatisticAsyncActions.LoadError({ massage: err.toString() })))
                );
            })
        )
    );

    public readonly onNextMonth$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromStatisticListActions.SetNextMonth),
            map(() => {
                return fromStatisticAsyncActions.Load();
            })
        )
    );

    public readonly onPreviousMonth$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromStatisticListActions.SetPreviousMonth),
            map(() => {
                return fromStatisticAsyncActions.Load();
            })
        )
    );

    constructor(
        private readonly store: Store<FeaturePartialState>,
        private readonly actions$: Actions,
        private readonly loadTransactionService: LoadTransactionService,
        private readonly appFeatureFacade: AppFeatureFacade,
        private readonly createStatisticModelService: CreateStatisticModelService
    ) {}
}
