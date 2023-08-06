import { ActionReducerMap } from '@ngrx/store';

import { FEATURE_STATE_KEY } from './feature.keys';
import { FeatureState } from './feature.state';
import { dashboardAsyncReducer } from './dashboard-async/dashboard-async.reducer';
import { dashboardListReducer } from './dashboard-list/dashboard-list.reducer';
import { dashboardDataReducer } from './dashboard-data/dashboard-data.reducer';

export const featureReducers: ActionReducerMap<FeatureState> = {
    [FEATURE_STATE_KEY.DASHBOARD_LIST]: dashboardListReducer,
    [FEATURE_STATE_KEY.DASHBOARD_ASYNC]: dashboardAsyncReducer,
    [FEATURE_STATE_KEY.DASHBOARD_DATA]: dashboardDataReducer,
};
