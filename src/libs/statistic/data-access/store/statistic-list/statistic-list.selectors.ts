import { createSelector, MemoizedSelector } from '@ngrx/store';
import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { StatisticListState } from './statistic-list.state';

export namespace fromStatisticListQuery {
    export const getState: MemoizedSelector<FeaturePartialState, StatisticListState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.STATISTIC_LIST]
    );

    export const getMounth: MemoizedSelector<FeaturePartialState, string> = createSelector(
        getState,
        (state: StatisticListState) => state.mounth
    );
}
