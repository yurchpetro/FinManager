import { ActionReducerMap } from '@ngrx/store';

import { FEATURE_STATE_KEY } from './feature.keys';
import { FeatureState } from './feature.state';
import { settingsListReducer } from './settings-list/settings-list.reducer';
import { settingsAsyncReducer } from './settings-async/settings-async.reducer';
import { settingsDataReducer } from './settings-data/settings-data.reducer';

export const featureReducers: ActionReducerMap<FeatureState> = {
    [FEATURE_STATE_KEY.SETTINGS_LIST]: settingsListReducer,
    [FEATURE_STATE_KEY.SETTINGS_ASYNC]: settingsAsyncReducer,
    [FEATURE_STATE_KEY.SETTINGS_DATA]: settingsDataReducer,
};
