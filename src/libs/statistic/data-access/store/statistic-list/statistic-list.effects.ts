import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';

import { FeaturePartialState } from '../feature.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { nextMounth, previousMounth } from '@common/utils';
import { fromStatisticListQuery } from './statistic-list.selectors';
import { fromStatisticListActions } from './statistic-list.actions';

@Injectable()
export class StatisticListEffects {
    public readonly onNextMonth$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromStatisticListActions.NextMonth),
            concatLatestFrom(() => [this.store.pipe(select(fromStatisticListQuery.getMounth))]),
            map(([action, mounth]: [fromStatisticListActions.NextMonth, string]) => {
                return fromStatisticListActions.SetNextMonth({ month: nextMounth(mounth) });
            })
        )
    );

    public readonly onPreviousMonth$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromStatisticListActions.PreviousMonth),
            concatLatestFrom(() => [this.store.pipe(select(fromStatisticListQuery.getMounth))]),
            map(([action, mounth]: [fromStatisticListActions.NextMonth, string]) => {
                return fromStatisticListActions.SetPreviousMonth({ month: previousMounth(mounth) });
            })
        )
    );

    constructor(
        private readonly store: Store<FeaturePartialState>,
        private readonly actions$: Actions
    ) {}
}
