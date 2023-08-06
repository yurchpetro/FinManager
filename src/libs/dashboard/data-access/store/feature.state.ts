import { FEATURE_KEY, FEATURE_STATE_KEY } from './feature.keys';
import { BaseAsyncState } from '@common/models';
import { DashboardListState } from './dashboard-list/dashboard-list.state';
import { DashboardDataState } from './dashboard-data/dashboard-data.state';

export interface FeatureState {
    [FEATURE_STATE_KEY.DASHBOARD_LIST]: DashboardListState;
    [FEATURE_STATE_KEY.DASHBOARD_ASYNC]: BaseAsyncState;
    [FEATURE_STATE_KEY.DASHBOARD_DATA]: DashboardDataState;
}

export interface FeaturePartialState {
    readonly [FEATURE_KEY.FEATURE]: FeatureState;
}
