import { ActionReducer, createReducer, on } from '@ngrx/store';

import { initialCalendarDataState, CalendarDataState } from './calendar-data.state';
import { fromCalendarDataActions } from './calendar-data.actions';
import { fromCalendarDataAdapter } from './calendar-data.adapter';

export const calendarDataReducer: ActionReducer<CalendarDataState> = createReducer(
    initialCalendarDataState,

    on(
        fromCalendarDataActions.SetAllAction,
        (state: CalendarDataState, { models }: fromCalendarDataActions.SetAllAction) => {
            return fromCalendarDataAdapter.setAll(models, state);
        }
    ),
    on(
        fromCalendarDataActions.AddOneAction,
        (state: CalendarDataState, { model }: fromCalendarDataActions.AddOneAction) => {
            return fromCalendarDataAdapter.addOne(model, state);
        }
    ),
    on(
        fromCalendarDataActions.UpsertManyAction,
        (state: CalendarDataState, { changes }: fromCalendarDataActions.UpsertManyAction) => {
            return fromCalendarDataAdapter.upsertMany(changes, state);
        }
    ),
    on(
        fromCalendarDataActions.UpdateOneAction,
        (state: CalendarDataState, { id, changes }: fromCalendarDataActions.UpsertOneAction) => {
            return fromCalendarDataAdapter.updateOne({ id, changes }, state);
        }
    ),
    on(
        fromCalendarDataActions.RemoveOneAction,
        (state: CalendarDataState, { id }: fromCalendarDataActions.RemoveOneAction) => {
            return fromCalendarDataAdapter.removeOne(id, state);
        }
    ),
    on(
        fromCalendarDataActions.UpdateManyAction,
        (state: CalendarDataState, { changes }: fromCalendarDataActions.UpdateManyAction) => {
            return fromCalendarDataAdapter.updateMany(changes, state);
        }
    ),

    on(fromCalendarDataActions.ClearAction, (state: CalendarDataState) => {
        return fromCalendarDataAdapter.removeAll(state);
    })
);
