import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { FeaturePartialState } from '../feature.state';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { fromCalendarAsyncActions } from './calendar-async.actions';
import { AppFeatureFacade } from '@common/data-access';
import { TransactionModel } from '@common/models';
import { fromCalendarListQuery } from '../calendar-list/calendar-list.selectors';
import { LoadTransactionService } from '@common/services';
import { CreateCalendarItemService } from '@libs/calendar/utils/services/create-calendar-item.service';

@Injectable()
export class CalendarAsyncEffects {
    public readonly onLoad$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCalendarAsyncActions.Load),
            concatLatestFrom(() => [
                this.store.pipe(select(fromCalendarListQuery.getMounth)),
                this.appFeatureFacade.currentUserId$,
            ]),
            switchMap(([action, mounth, userId]: [fromCalendarAsyncActions.Load, string, string | null]) => {
                if (!userId) {
                    return of(fromCalendarAsyncActions.LoadError({ massage: 'Please Log In' }));
                }

                return this.loadTransactionService.onLoad(userId, mounth).pipe(
                    switchMap((response: TransactionModel[]) => {
                        return [
                            fromCalendarAsyncActions.LoadSuccess({
                                models: this.createCalendarItemService.createCalendarItems(response),
                            }),
                        ];
                    }),
                    catchError(err => of(fromCalendarAsyncActions.LoadError({ massage: err.toString() })))
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
