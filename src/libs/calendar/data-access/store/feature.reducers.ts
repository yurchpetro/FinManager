import { ActionReducerMap } from '@ngrx/store';

import { FEATURE_STATE_KEY } from './feature.keys';
import { FeatureState } from './feature.state';
import { calendarListReducer } from './calendar-list/calendar-list.reducer';
import { calendarAsyncReducer } from './calendar-async/calendar-async.reducer';
import { calendarDataReducer } from './calendar-data/calendar-data.reducer';

export const featureReducers: ActionReducerMap<FeatureState> = {
    [FEATURE_STATE_KEY.CALENDAR_LIST]: calendarListReducer,
    [FEATURE_STATE_KEY.CALENDAR_ASYNC]: calendarAsyncReducer,
    [FEATURE_STATE_KEY.CALENDAR_DATA]: calendarDataReducer,
};
