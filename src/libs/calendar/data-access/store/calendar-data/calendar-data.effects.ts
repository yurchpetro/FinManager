import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { fromCalendarDataActions } from './calendar-data.actions';
import { fromCalendarAsyncActions } from '../calendar-async/calendar-async.actions';

@Injectable()
export class CalendarDataEffects {
    public readonly onAsyncLoadSuccess$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCalendarAsyncActions.LoadSuccess),
            map(({ models }: fromCalendarAsyncActions.LoadSuccess) => {
                return fromCalendarDataActions.SetAllAction({ models });
            })
        )
    );

    constructor(private readonly actions$: Actions) {}
}
