import { createSelector, MemoizedSelector } from '@ngrx/store';

import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { SettingsDataState } from './settings-data.state';

export namespace fromSettingsDataQuery {
    export const getState: MemoizedSelector<FeaturePartialState, SettingsDataState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.SETTINGS_DATA]
    );

    export const getDateFormat: MemoizedSelector<FeaturePartialState, string> = createSelector(
        getState,
        (state: SettingsDataState) => state.dateFormat
    );

    export const getCurrency: MemoizedSelector<FeaturePartialState, string> = createSelector(
        getState,
        (state: SettingsDataState) => state.currency
    );
}
