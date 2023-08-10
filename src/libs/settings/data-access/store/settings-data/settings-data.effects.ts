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
            map(({ settings }: fromSettingsAsyncActions.LoadSuccess) => {
                return fromSettingsDataActions.SetSettingsAction({ models: settings });
            })
        )
    );

    public readonly onSetCurrency$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSettingsDataActions.SetCurrencyAction),
            map((action: fromSettingsDataActions.SetCurrencyAction) => {
                return fromSettingsAsyncActions.Update();
            })
        )
    );

    public readonly onSetDateFormat$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSettingsDataActions.SetDateFormatAction),
            map((action: fromSettingsDataActions.SetDateFormatAction) => {
                return fromSettingsAsyncActions.Update();
            })
        )
    );

    constructor(private readonly actions$: Actions) {}
}
