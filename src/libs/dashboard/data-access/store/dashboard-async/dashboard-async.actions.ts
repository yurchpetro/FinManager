import { ActionCreatorBy } from '@core';
import { createAction, props } from '@ngrx/store';
import { TransactionModel, UserModel } from '@common/models';

export namespace fromDashboardAsyncActions {
    export const Load: ActionCreatorBy.Type = createAction('[Dashboard] Load');
    export type Load = ReturnType<typeof Load>;

    export const LoadSuccess: ActionCreatorBy.Props<any> = createAction('[Dashboard] Load Success', props<any>());
    export type LoadSuccess = ReturnType<typeof LoadSuccess>;

    export const LoadError: ActionCreatorBy.Props<{ massage: string }> = createAction(
        '[Dashboard Async] Load Error',
        props<{
            massage: string;
        }>()
    );
    export type LoadError = ReturnType<typeof LoadError>;

    // // ================================
    // // Fetch
    // // ================================
    //
    // export const Fetch: ActionCreatorBy.Type = createAction('Fetch');
    // export type Fetch = ReturnType<typeof Fetch>;
    //
    // export const FetchSuccess: ActionCreatorBy.Props<{ models: LabelStateModel[] }> = createAction(
    //     actionTypeCreator('Fetch Success'),
    //     props()
    // );
    // export type FetchSuccess = ReturnType<typeof FetchSuccess>;
    //
    // export const FetchError: ActionCreatorBy.Type = createAction(actionTypeCreator('Fetch Error'));
    // export type FetchError = ReturnType<typeof FetchError>;

    // ================================
    // Create
    // ================================

    export const Create: ActionCreatorBy.Props<{ transaction: TransactionModel }> = createAction(
        '[Dashboard Async] Create',
        props<{ transaction: TransactionModel }>()
    );
    export type Create = ReturnType<typeof Create>;

    export const CreateSuccess: ActionCreatorBy.Type = createAction('[Dashboard Async] Create Success');
    export type CreateSuccess = ReturnType<typeof CreateSuccess>;

    export const CreateError: ActionCreatorBy.Type = createAction('[Dashboard Async] Create Error');
    export type CreateError = ReturnType<typeof CreateError>;

    // ================================
    // Update
    // ================================

    export const Update: ActionCreatorBy.Props<{ transaction: Partial<TransactionModel> }> = createAction(
        '[Dashboard Async] Update',
        props<{ transaction: Partial<TransactionModel> }>()
    );
    export type Update = ReturnType<typeof Update>;

    export const UpdateSuccess: ActionCreatorBy.Type = createAction('[Dashboard Async] Update Success');
    export type UpdateSuccess = ReturnType<typeof UpdateSuccess>;

    export const UpdateError: ActionCreatorBy.Type = createAction('[Dashboard Async] Update Error');
    export type UpdateError = ReturnType<typeof UpdateError>;

    // ================================
    // Delete
    // ================================

    export const Delete: ActionCreatorBy.Props<{ id: string }> = createAction(
        '[Dashboard Async] Delete',
        props<{ id: string }>()
    );
    export type Delete = ReturnType<typeof Delete>;

    export const DeleteSuccess: ActionCreatorBy.Type = createAction('[Dashboard Async] Delete Success');
    export type DeleteSuccess = ReturnType<typeof DeleteSuccess>;

    export const DeleteError: ActionCreatorBy.Type = createAction('[Dashboard Async] Delete Error');
    export type DeleteError = ReturnType<typeof DeleteError>;

    export const Reset: ActionCreatorBy.Props<{ user: UserModel }> = createAction(
        '[Dashboard Async] Reset',
        props<{ user: UserModel }>()
    );
    export type Reset = ReturnType<typeof Reset>;
}
