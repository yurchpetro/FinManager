import { createAction, props } from '@ngrx/store';

import { ActionCreatorBy } from '@core';
import { TransactionModel } from '@common/models';

export namespace fromStatisticDataActions {
    export const SetAllAction: ActionCreatorBy.Props<{ models: TransactionModel[] }> = createAction(
        '[Statistic Data] Set All',
        props<{ models: TransactionModel[] }>()
    );
    export type SetAllAction = ReturnType<typeof SetAllAction>;

    export const AddOneAction: ActionCreatorBy.Props<{ model: TransactionModel }> = createAction(
        '[Statistic Data] Add One',
        props<{ model: TransactionModel }>()
    );
    export type AddOneAction = ReturnType<typeof AddOneAction>;

    export const UpsertManyAction: ActionCreatorBy.Props<{ changes: TransactionModel[] }> = createAction(
        '[Statistic Data] Upsert Many',
        props<{ changes: TransactionModel[] }>()
    );
    export type UpsertManyAction = ReturnType<typeof UpsertManyAction>;

    export const UpdateOneAction: ActionCreatorBy.Props<{ id: string; changes: Partial<TransactionModel> }> =
        createAction('[Statistic Data] Update One', props<{ id: string; changes: Partial<TransactionModel> }>());
    export type UpsertOneAction = ReturnType<typeof UpdateOneAction>;

    export const UpdateManyAction: ActionCreatorBy.Props<{
        changes: Array<{ id: string; changes: Partial<TransactionModel> }>;
    }> = createAction(
        '[Statistic Data] Update Many',
        props<{ changes: Array<{ id: string; changes: Partial<TransactionModel> }> }>()
    );
    export type UpdateManyAction = ReturnType<typeof UpdateManyAction>;

    export const RemoveOneAction: ActionCreatorBy.Props<{ id: string }> = createAction(
        '[Statistic Data] Remove One',
        props<{ id: string }>()
    );
    export type RemoveOneAction = ReturnType<typeof RemoveOneAction>;

    export const ClearAction: ActionCreatorBy.Type = createAction('[Statistic Data] Clear');
}
