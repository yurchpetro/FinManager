import { ActionReducer, createReducer, on } from '@ngrx/store';

import { initialSettingsDataState, SettingsDataState } from './settings-data.state';
import { fromSettingsDataActions } from './settings-data.actions';

export const settingsDataReducer: ActionReducer<SettingsDataState> = createReducer(initialSettingsDataState);
