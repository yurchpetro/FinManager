import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { FeaturePartialState } from '../feature.state';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { fromSettingsAsyncActions } from './settings-async.actions';
import { AppFeatureFacade } from '@common/data-access';
import { TransactionModel } from '@common/models';
import { fromSettingsListQuery } from '@libs/settings/data-access/store/settings-list/settings-list.selectors';
import { LoadTransactionService } from '@common/services';
import { CreateCalendarItemService } from '@libs/calendar/utils/services/create-calendar-item.service';

@Injectable()
export class SettingsAsyncEffects {
    public readonly onLoad$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSettingsAsyncActions.Load),
            concatLatestFrom(() => [
                this.store.pipe(select(fromSettingsListQuery.getMounth)),
                this.appFeatureFacade.currentUserId$,
            ]),
            switchMap(([action, mounth, userId]: [fromSettingsAsyncActions.Load, string, string | null]) => {
                if (!userId) {
                    return of(fromSettingsAsyncActions.LoadError({ massage: 'Please Log In' }));
                }

                return this.loadTransactionService.onLoad(userId, mounth).pipe(
                    switchMap((response: TransactionModel[]) => {
                        return [
                            fromSettingsAsyncActions.LoadSuccess({
                                models: this.createCalendarItemService.createCalendarItems(response),
                            }),
                        ];
                    }),
                    catchError(err => of(fromSettingsAsyncActions.LoadError({ massage: err.toString() })))
                );
            })
        )
    );

    constructor(
        private readonly store: Store<FeaturePartialState>,
        private readonly actions$: Actions,
        private readonly loadTransactionService: LoadTransactionService,
        private readonly appFeatureFacade: AppFeatureFacade,
        private readonly createCalendarItemService: CreateCalendarItemService
    ) {}
}
