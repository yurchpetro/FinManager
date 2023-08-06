import { createSelector, MemoizedSelector } from '@ngrx/store';
import { EntitySelectors } from '@ngrx/entity/src/models';

import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { DashboardDataState } from './dashboard-data.state';
import { fromListDataAdapter } from './dashboard-data.adapter';
import { TransactionModel } from '@common/models';

export namespace fromListDataQuery {
    export const getState: MemoizedSelector<FeaturePartialState, DashboardDataState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.DASHBOARD_DATA]
    );

    export const {
        selectAll: getAll,
        selectEntities: getEntities,
        selectIds: getIds,
        selectTotal: getTotal,
    }: EntitySelectors<TransactionModel, FeaturePartialState> = fromListDataAdapter.getSelectors(getState);
}
