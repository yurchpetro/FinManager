import { FEATURE_KEY, FEATURE_STATE_KEY } from './feature.keys';
import { BaseAsyncState } from '@common/models';
import { StatisticListState } from './statistic-list/statistic-list.state';
import { StatisticDataState } from './statistic-data/statistic-data.state';

export interface FeatureState {
    [FEATURE_STATE_KEY.STATISTIC_LIST]: StatisticListState;
    [FEATURE_STATE_KEY.STATISTIC_ASYNC]: BaseAsyncState;
    [FEATURE_STATE_KEY.STATISTIC_DATA]: StatisticDataState;
}

export interface FeaturePartialState {
    readonly [FEATURE_KEY.FEATURE]: FeatureState;
}
