import { createAction, props } from '@ngrx/store';

import { ActionCreatorBy } from '@core';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

export namespace fromSettingsDataActions {
    export const SetAllAction: ActionCreatorBy.Props<{ models: CalendarItemModel[] }> = createAction(
        '[Settings Data] Set All',
        props<{ models: CalendarItemModel[] }>()
    );
    export type SetAllAction = ReturnType<typeof SetAllAction>;

    export const AddOneAction: ActionCreatorBy.Props<{ model: CalendarItemModel }> = createAction(
        '[Settings Data] Add One',
        props<{ model: CalendarItemModel }>()
    );
    export type AddOneAction = ReturnType<typeof AddOneAction>;

    export const UpsertManyAction: ActionCreatorBy.Props<{ changes: CalendarItemModel[] }> = createAction(
        '[Settings Data] Upsert Many',
        props<{ changes: CalendarItemModel[] }>()
    );
    export type UpsertManyAction = ReturnType<typeof UpsertManyAction>;

    export const UpdateOneAction: ActionCreatorBy.Props<{ id: string; changes: Partial<CalendarItemModel> }> =
        createAction('[Settings Data] Update One', props<{ id: string; changes: Partial<CalendarItemModel> }>());
    export type UpsertOneAction = ReturnType<typeof UpdateOneAction>;

    export const UpdateManyAction: ActionCreatorBy.Props<{
        changes: Array<{ id: string; changes: Partial<CalendarItemModel> }>;
    }> = createAction(
        '[Settings Data] Update Many',
        props<{ changes: Array<{ id: string; changes: Partial<CalendarItemModel> }> }>()
    );
    export type UpdateManyAction = ReturnType<typeof UpdateManyAction>;

    export const RemoveOneAction: ActionCreatorBy.Props<{ id: string }> = createAction(
        '[Settings Data] Remove One',
        props<{ id: string }>()
    );
    export type RemoveOneAction = ReturnType<typeof RemoveOneAction>;

    export const ClearAction: ActionCreatorBy.Type = createAction('[Settings Data] Clear');
}
