import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { FeaturePartialState, FeatureState } from './feature.state';
import { FEATURE_KEY } from './feature.keys';

export namespace fromFeatureQuerySelector {
    export const getFeature: MemoizedSelector<FeaturePartialState, FeatureState> = createFeatureSelector<FeatureState>(
        FEATURE_KEY.FEATURE
    );
}
