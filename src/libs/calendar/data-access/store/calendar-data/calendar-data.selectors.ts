import { createSelector, MemoizedSelector } from '@ngrx/store';
import { EntitySelectors } from '@ngrx/entity/src/models';

import { FeaturePartialState, FeatureState } from '../feature.state';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { FEATURE_STATE_KEY } from '../feature.keys';
import { CalendarDataState } from './calendar-data.state';
import { fromCalendarDataAdapter } from './calendar-data.adapter';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

export namespace fromCalendarDataQuery {
    export const getState: MemoizedSelector<FeaturePartialState, CalendarDataState> = createSelector(
        fromFeatureQuerySelector.getFeature,
        (state: FeatureState) => state[FEATURE_STATE_KEY.CALENDAR_DATA]
    );

    export const {
        selectAll: getAll,
        selectEntities: getEntities,
        selectIds: getIds,
        selectTotal: getTotal,
    }: EntitySelectors<CalendarItemModel, FeaturePartialState> = fromCalendarDataAdapter.getSelectors(getState);
}
