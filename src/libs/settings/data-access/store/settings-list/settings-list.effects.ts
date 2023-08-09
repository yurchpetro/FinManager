import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';

import { FeaturePartialState } from '../feature.state';
import { Observable } from 'rxjs';
import { fromCalendarListQuery } from '@libs/calendar/data-access/store/calendar-list/calendar-list.selectors';
import { fromCalendarListActions } from '@libs/calendar/data-access/store/calendar-list/calendar-list.actions';
import { map } from 'rxjs/operators';
import { nextMounth, previousMounth } from '@common/utils';

@Injectable()
export class SettingsListEffects {
    // public readonly onNextMonth$: Observable<Action> = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(fromCalendarListActions.NextMonth),
    //         concatLatestFrom(() => [this.store.pipe(select(fromCalendarListQuery.getMounth))]),
    //         map(([action, mounth]: [fromCalendarListActions.NextMonth, string]) => {
    //             return fromCalendarListActions.SetNextMonth({ month: nextMounth(mounth) });
    //         })
    //     )
    // );
    //
    // public readonly onPreviousMonth$: Observable<Action> = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(fromCalendarListActions.PreviousMonth),
    //         concatLatestFrom(() => [this.store.pipe(select(fromCalendarListQuery.getMounth))]),
    //         map(([action, mounth]: [fromCalendarListActions.NextMonth, string]) => {
    //             return fromCalendarListActions.SetPreviousMonth({ month: previousMounth(mounth) });
    //         })
    //     )
    // );

    constructor(
        private readonly store: Store<FeaturePartialState>,
        private readonly actions$: Actions
    ) {}
}
