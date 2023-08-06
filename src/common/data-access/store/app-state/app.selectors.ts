import { createSelector, MemoizedSelector } from '@ngrx/store';
import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { AppState } from './app.state';
import { UserModel } from '@common/models';

export namespace fromAppQuery {
    export const getState: MemoizedSelector<FeaturePartialState, AppState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.APP_STATE]
    );

    export const getUser: MemoizedSelector<FeaturePartialState, UserModel | null> = createSelector(
        getState,
        (state: AppState) => state.current
    );
}
