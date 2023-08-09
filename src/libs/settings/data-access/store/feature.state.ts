import { FEATURE_KEY, FEATURE_STATE_KEY } from './feature.keys';
import { BaseAsyncState } from '@common/models';
import { SettingsListState } from './settings-list/settings-list.state';
import { SettingsDataState } from './settings-data/settings-data.state';

export interface FeatureState {
    [FEATURE_STATE_KEY.SETTINGS_LIST]: SettingsListState;
    [FEATURE_STATE_KEY.SETTINGS_ASYNC]: BaseAsyncState;
    [FEATURE_STATE_KEY.SETTINGS_DATA]: SettingsDataState;
}

export interface FeaturePartialState {
    readonly [FEATURE_KEY.FEATURE]: FeatureState;
}
