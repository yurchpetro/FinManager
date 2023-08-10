import { ActionReducer, createReducer, on } from '@ngrx/store';

import { initialSettingsDataState, SettingsDataState } from './settings-data.state';
import { fromSettingsDataActions } from './settings-data.actions';

export const settingsDataReducer: ActionReducer<SettingsDataState> = createReducer(
    initialSettingsDataState,

    on(
        fromSettingsDataActions.SetSettingsAction,
        (state: SettingsDataState, { models }: fromSettingsDataActions.SetSettingsAction): SettingsDataState => ({
            ...state,
            ...models,
        })
    ),

    on(
        fromSettingsDataActions.SetCurrencyAction,
        (state: SettingsDataState, { currency }: fromSettingsDataActions.SetCurrencyAction): SettingsDataState => ({
            ...state,
            currency,
        })
    ),

    on(
        fromSettingsDataActions.SetDateFormatAction,
        (state: SettingsDataState, { dateFormat }: fromSettingsDataActions.SetDateFormatAction): SettingsDataState => ({
            ...state,
            dateFormat,
        })
    )
);
