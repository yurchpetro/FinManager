import { createSelector, MemoizedSelector } from '@ngrx/store';
import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { BaseAsyncState } from '@common/models';
import { ModelStatus } from '@common/enums';

export namespace fromCalendarAsyncQuery {
    export const getState: MemoizedSelector<FeaturePartialState, BaseAsyncState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.CALENDAR_ASYNC]
    );

    export const getLoadingStatus: MemoizedSelector<FeaturePartialState, boolean> = createSelector(
        getState,
        (state: BaseAsyncState) => state.loading
    );

    export const getFetchingStatus: MemoizedSelector<FeaturePartialState, boolean> = createSelector(
        getState,
        (state: BaseAsyncState) => state.fetching
    );

    export const getModelStatus: MemoizedSelector<FeaturePartialState, ModelStatus> = createSelector(
        getState,
        (state: BaseAsyncState) => state.status
    );

    export const getErrorMassage: MemoizedSelector<FeaturePartialState, string | null> = createSelector(
        getState,
        (state: BaseAsyncState) => state.error
    );
}
