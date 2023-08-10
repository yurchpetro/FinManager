import { createAction, props } from '@ngrx/store';

import { ActionCreatorBy } from '@core';
import { SettingsStateModel } from '@libs/settings/utils';

export namespace fromSettingsDataActions {
    export const SetSettingsAction: ActionCreatorBy.Props<{ models: SettingsStateModel }> = createAction(
        '[Settings Data] Set All Settings',
        props<{ models: SettingsStateModel }>()
    );
    export type SetSettingsAction = ReturnType<typeof SetSettingsAction>;

    export const SetCurrencyAction: ActionCreatorBy.Props<{ currency: string }> = createAction(
        '[Settings Data] Set Currency Settings',
        props<{ currency: string }>()
    );
    export type SetCurrencyAction = ReturnType<typeof SetCurrencyAction>;

    export const SetDateFormatAction: ActionCreatorBy.Props<{ dateFormat: string }> = createAction(
        '[Settings Data] Set DateFormat Settings',
        props<{ dateFormat: string }>()
    );
    export type SetDateFormatAction = ReturnType<typeof SetDateFormatAction>;

    export const ClearAction: ActionCreatorBy.Type = createAction('[Settings Data] Clear');
}
