import { createSelector, MemoizedSelector } from '@ngrx/store';
import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { DashboardListState } from './dashboard-list.state';

export namespace fromDashboardQuery {
    export const getState: MemoizedSelector<FeaturePartialState, DashboardListState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.DASHBOARD_LIST]
    );
}
