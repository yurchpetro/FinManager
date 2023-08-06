import { ActionReducerMap } from '@ngrx/store';

import { FEATURE_STATE_KEY } from './feature.keys';
import { FeatureState } from './feature.state';

import { appReducer } from './app-state/app.reducer';

export const featureReducers: ActionReducerMap<FeatureState> = {
    [FEATURE_STATE_KEY.APP_STATE]: appReducer,
};
