import { FEATURE_KEY, FEATURE_STATE_KEY } from './feature.keys';
import { AppState } from './app-state/app.state';

export interface FeatureState {
    [FEATURE_STATE_KEY.APP_STATE]: AppState;
}

export interface FeaturePartialState {
    readonly [FEATURE_KEY.FEATURE]: FeatureState;
}
