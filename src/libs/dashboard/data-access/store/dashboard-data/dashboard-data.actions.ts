import { createAction, props } from '@ngrx/store';

import { ActionCreatorBy } from '@core';
import { TransactionModel } from '@common/models';

export namespace fromDashboardDataActions {
    export const SetAllAction: ActionCreatorBy.Props<{ models: TransactionModel[] }> = createAction(
        '[Dashboard Data] Set All',
        props<{ models: TransactionModel[] }>()
    );
    export type SetAllAction = ReturnType<typeof SetAllAction>;

    export const AddOneAction: ActionCreatorBy.Props<{ model: TransactionModel }> = createAction(
        '[Dashboard Data] Add One',
        props<{ model: TransactionModel }>()
    );
    export type AddOneAction = ReturnType<typeof AddOneAction>;

    export const UpsertManyAction: ActionCreatorBy.Props<{ changes: TransactionModel[] }> = createAction(
        '[Dashboard Data] Upsert Many',
        props<{ changes: TransactionModel[] }>()
    );
    export type UpsertManyAction = ReturnType<typeof UpsertManyAction>;

    export const UpdateOneAction: ActionCreatorBy.Props<{ id: string; changes: Partial<TransactionModel> }> =
        createAction('[Dashboard Data] Update One', props<{ id: string; changes: Partial<TransactionModel> }>());
    export type UpsertOneAction = ReturnType<typeof UpdateOneAction>;

    export const UpdateManyAction: ActionCreatorBy.Props<{
        changes: Array<{ id: string; changes: Partial<TransactionModel> }>;
    }> = createAction(
        '[Dashboard Data] Update Many',
        props<{ changes: Array<{ id: string; changes: Partial<TransactionModel> }> }>()
    );
    export type UpdateManyAction = ReturnType<typeof UpdateManyAction>;

    export const RemoveOneAction: ActionCreatorBy.Props<{ id: string }> = createAction(
        '[Dashboard Data] Remove One',
        props<{ id: string }>()
    );
    export type RemoveOneAction = ReturnType<typeof RemoveOneAction>;

    export const ClearAction: ActionCreatorBy.Type = createAction('[Dashboard Data] Clear');
}
