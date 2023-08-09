import { createSelector, MemoizedSelector } from '@ngrx/store';
import { EntitySelectors } from '@ngrx/entity/src/models';

import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { SettingsDataState } from './settings-data.state';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

export namespace fromSettingsDataQuery {
    export const getState: MemoizedSelector<FeaturePartialState, SettingsDataState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.SETTINGS_DATA]
    );
}
