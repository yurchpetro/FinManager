import { fromCalendarListActions } from './calendar-list.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { CalendarListState, initialCalendarListState } from './calendar-list.state';
export const calendarListReducer: ActionReducer<CalendarListState> = createReducer(
    initialCalendarListState,
    on(
        fromCalendarListActions.SetNextMonth,
        (state: CalendarListState, { month }: fromCalendarListActions.SetNextMonth): CalendarListState => ({
            mounth: month,
        })
    ),
    on(
        fromCalendarListActions.SetPreviousMonth,
        (state: CalendarListState, { month }: fromCalendarListActions.SetNextMonth): CalendarListState => ({
            mounth: month,
        })
    )
);
