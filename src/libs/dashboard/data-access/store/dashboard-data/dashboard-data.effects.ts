import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { fromDashboardDataActions } from './dashboard-data.actions';
import { fromDashboardAsyncActions } from '../dashboard-async/dashboard-async.actions';

@Injectable()
export class DashboardDataEffects {
    public readonly onAsyncLoadSuccess$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromDashboardAsyncActions.LoadSuccess),
            map(({ models }: fromDashboardAsyncActions.LoadSuccess) => {
                return fromDashboardDataActions.SetAllAction({ models });
            })
        )
    );

    constructor(private readonly actions$: Actions) {}
}
