import { ActionReducerMap } from '@ngrx/store';

import { FEATURE_STATE_KEY } from './feature.keys';
import { FeatureState } from './feature.state';
import { statisticAsyncReducer } from './statistic-async/statistic-async.reducer';
import { statisticListReducer } from './statistic-list/statistic-list.reducer';
import { statisticDataReducer } from './statistic-data/statistic-data.reducer';

export const featureReducers: ActionReducerMap<FeatureState> = {
    [FEATURE_STATE_KEY.STATISTIC_LIST]: statisticListReducer,
    [FEATURE_STATE_KEY.STATISTIC_ASYNC]: statisticAsyncReducer,
    [FEATURE_STATE_KEY.STATISTIC_DATA]: statisticDataReducer,
};
