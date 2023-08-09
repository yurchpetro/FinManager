import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { fromSettingsDataActions } from './settings-data.actions';
import { fromSettingsAsyncActions } from '@libs/settings/data-access/store/settings-async/settings-async.actions';

@Injectable()
export class SettingsDataEffects {
    public readonly onAsyncLoadSuccess$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSettingsAsyncActions.LoadSuccess),
            map(({ models }: fromSettingsAsyncActions.LoadSuccess) => {
                return fromSettingsDataActions.SetAllAction({ models });
            })
        )
    );

    constructor(private readonly actions$: Actions) {}
}
