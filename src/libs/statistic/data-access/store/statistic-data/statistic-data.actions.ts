import { createAction, props } from '@ngrx/store';

import { ActionCreatorBy } from '@core';
import { StatisticItemModel } from '@libs/statistic/utils/model/statistic-item.model';

export namespace fromStatisticDataActions {
    export const SetAllAction: ActionCreatorBy.Props<{ models: StatisticItemModel[] }> = createAction(
        '[Statistic Data] Set All',
        props<{ models: StatisticItemModel[] }>()
    );
    export type SetAllAction = ReturnType<typeof SetAllAction>;

    export const AddOneAction: ActionCreatorBy.Props<{ model: StatisticItemModel }> = createAction(
        '[Statistic Data] Add One',
        props<{ model: StatisticItemModel }>()
    );
    export type AddOneAction = ReturnType<typeof AddOneAction>;

    export const UpsertManyAction: ActionCreatorBy.Props<{ changes: StatisticItemModel[] }> = createAction(
        '[Statistic Data] Upsert Many',
        props<{ changes: StatisticItemModel[] }>()
    );
    export type UpsertManyAction = ReturnType<typeof UpsertManyAction>;

    export const UpdateOneAction: ActionCreatorBy.Props<{ id: string; changes: Partial<StatisticItemModel> }> =
        createAction('[Statistic Data] Update One', props<{ id: string; changes: Partial<StatisticItemModel> }>());
    export type UpsertOneAction = ReturnType<typeof UpdateOneAction>;

    export const UpdateManyAction: ActionCreatorBy.Props<{
        changes: Array<{ id: string; changes: Partial<StatisticItemModel> }>;
    }> = createAction(
        '[Statistic Data] Update Many',
        props<{ changes: Array<{ id: string; changes: Partial<StatisticItemModel> }> }>()
    );
    export type UpdateManyAction = ReturnType<typeof UpdateManyAction>;

    export const RemoveOneAction: ActionCreatorBy.Props<{ id: string }> = createAction(
        '[Statistic Data] Remove One',
        props<{ id: string }>()
    );
    export type RemoveOneAction = ReturnType<typeof RemoveOneAction>;

    export const ClearAction: ActionCreatorBy.Type = createAction('[Statistic Data] Clear');
}
