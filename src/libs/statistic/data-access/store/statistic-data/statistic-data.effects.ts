import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { fromStatisticDataActions } from './statistic-data.actions';
import { fromStatisticAsyncActions } from '../statistic-async/statistic-async.actions';

@Injectable()
export class StatisticDataEffects {
    public readonly onAsyncLoadSuccess$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromStatisticAsyncActions.LoadSuccess),
            map(({ models }: fromStatisticAsyncActions.LoadSuccess) => {
                return fromStatisticDataActions.SetAllAction({ models });
            })
        )
    );

    constructor(private readonly actions$: Actions) {}
}
