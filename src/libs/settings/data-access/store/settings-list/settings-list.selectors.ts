import { createSelector, MemoizedSelector } from '@ngrx/store';
import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { SettingsListState } from './settings-list.state';

export namespace fromSettingsListQuery {
    export const getState: MemoizedSelector<FeaturePartialState, SettingsListState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.SETTINGS_LIST]
    );

    export const getMounth: MemoizedSelector<FeaturePartialState, string> = createSelector(
        getState,
        (state: SettingsListState) => state.mounth
    );
}
