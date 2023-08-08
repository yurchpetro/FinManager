import { FEATURE_KEY, FEATURE_STATE_KEY } from './feature.keys';
import { BaseAsyncState } from '@common/models';
import { CalendarListState } from './calendar-list/calendar-list.state';
import { CalendarDataState } from './calendar-data/calendar-data.state';

export interface FeatureState {
    [FEATURE_STATE_KEY.CALENDAR_LIST]: CalendarListState;
    [FEATURE_STATE_KEY.CALENDAR_ASYNC]: BaseAsyncState;
    [FEATURE_STATE_KEY.CALENDAR_DATA]: CalendarDataState;
}

export interface FeaturePartialState {
    readonly [FEATURE_KEY.FEATURE]: FeatureState;
}
