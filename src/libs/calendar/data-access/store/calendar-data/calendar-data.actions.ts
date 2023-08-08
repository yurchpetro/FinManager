import { createAction, props } from '@ngrx/store';

import { ActionCreatorBy } from '@core';
import { TransactionModel } from '@common/models';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

export namespace fromCalendarDataActions {
    export const SetAllAction: ActionCreatorBy.Props<{ models: CalendarItemModel[] }> = createAction(
        '[Calendar Data] Set All',
        props<{ models: CalendarItemModel[] }>()
    );
    export type SetAllAction = ReturnType<typeof SetAllAction>;

    export const AddOneAction: ActionCreatorBy.Props<{ model: CalendarItemModel }> = createAction(
        '[Calendar Data] Add One',
        props<{ model: CalendarItemModel }>()
    );
    export type AddOneAction = ReturnType<typeof AddOneAction>;

    export const UpsertManyAction: ActionCreatorBy.Props<{ changes: CalendarItemModel[] }> = createAction(
        '[Calendar Data] Upsert Many',
        props<{ changes: CalendarItemModel[] }>()
    );
    export type UpsertManyAction = ReturnType<typeof UpsertManyAction>;

    export const UpdateOneAction: ActionCreatorBy.Props<{ id: string; changes: Partial<CalendarItemModel> }> =
        createAction('[Calendar Data] Update One', props<{ id: string; changes: Partial<CalendarItemModel> }>());
    export type UpsertOneAction = ReturnType<typeof UpdateOneAction>;

    export const UpdateManyAction: ActionCreatorBy.Props<{
        changes: Array<{ id: string; changes: Partial<CalendarItemModel> }>;
    }> = createAction(
        '[Calendar Data] Update Many',
        props<{ changes: Array<{ id: string; changes: Partial<CalendarItemModel> }> }>()
    );
    export type UpdateManyAction = ReturnType<typeof UpdateManyAction>;

    export const RemoveOneAction: ActionCreatorBy.Props<{ id: string }> = createAction(
        '[Calendar Data] Remove One',
        props<{ id: string }>()
    );
    export type RemoveOneAction = ReturnType<typeof RemoveOneAction>;

    export const ClearAction: ActionCreatorBy.Type = createAction('[Calendar Data] Clear');
}
