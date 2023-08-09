import { createSelector, MemoizedSelector } from '@ngrx/store';
import { EntitySelectors } from '@ngrx/entity/src/models';

import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { StatisticDataState } from './statistic-data.state';
import { fromStatisticDataAdapter } from './statistic-data.adapter';
import { StatisticItemModel } from '@libs/statistic/utils/model/statistic-item.model';

export namespace fromStatisticDataQuery {
    export const getState: MemoizedSelector<FeaturePartialState, StatisticDataState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.STATISTIC_DATA]
    );

    export const {
        selectAll: getAll,
        selectEntities: getEntities,
        selectIds: getIds,
        selectTotal: getTotal,
    }: EntitySelectors<StatisticItemModel, FeaturePartialState> = fromStatisticDataAdapter.getSelectors(getState);
}
