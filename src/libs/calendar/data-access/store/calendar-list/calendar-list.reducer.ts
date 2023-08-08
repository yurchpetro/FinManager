import { fromDashboardActions } from './calendar-list.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { CalendarListState, initialCalendarListState } from './calendar-list.state';

export const calendarListReducer: ActionReducer<CalendarListState> = createReducer(initialCalendarListState);
