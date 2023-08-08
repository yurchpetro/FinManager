import { createSelector, MemoizedSelector } from '@ngrx/store';
import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { CalendarListState } from './calendar-list.state';

export namespace fromCalendarListQuery {
    export const getState: MemoizedSelector<FeaturePartialState, CalendarListState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.CALENDAR_LIST]
    );

    export const getMounth: MemoizedSelector<FeaturePartialState, string> = createSelector(
        getState,
        (state: CalendarListState) => state.mounth
    );
}
