import { fromDashboardAsyncActions } from './dashboard-async.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { initialDashboardAsyncState } from './dashboard-async.state';
import { ModelStatus } from '@common/enums';
import { BaseAsyncState } from '@common/models';

export const dashboardAsyncReducer: ActionReducer<BaseAsyncState> = createReducer(
    initialDashboardAsyncState,

    // ================================
    // Load
    // ================================

    on(
        fromDashboardAsyncActions.Load,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: true,
            status: state.status === ModelStatus.Init ? ModelStatus.Init : ModelStatus.Pending,
        })
    ),
    on(
        fromDashboardAsyncActions.LoadSuccess,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: false,
            status: ModelStatus.Success,
        })
    ),
    on(
        fromDashboardAsyncActions.LoadError,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: false,
            status: ModelStatus.Error,
        })
    ),

    // // ================================
    // // Fetch
    // // ================================
    //
    // on(
    //     fromDashboardAsyncActions.Fetch,
    //     (state: BaseAsyncState): BaseAsyncState => ({
    //         ...state,
    //         fetching: true,
    //         status: ModelStatus.Pending,
    //     })
    // ),
    // on(
    //     fromDashboardAsyncActions.FetchSuccess,
    //     (state: BaseAsyncState): BaseAsyncState => ({
    //         ...state,
    //         fetching: false,
    //         status: ModelStatus.Success,
    //     })
    // ),
    // on(
    //     fromDashboardAsyncActions.FetchError,
    //     (state: BaseAsyncState): BaseAsyncState => ({
    //         ...state,
    //         fetching: false,
    //         status: ModelStatus.Error,
    //     })
    // ),

    // ================================
    // Create
    // ================================

    on(
        fromDashboardAsyncActions.Create,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            fetching: true,
            status: ModelStatus.Pending,
        })
    ),
    on(
        fromDashboardAsyncActions.CreateSuccess,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            fetching: false,
            status: ModelStatus.Success,
        })
    ),
    on(
        fromDashboardAsyncActions.CreateError,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            fetching: false,
            status: ModelStatus.Error,
        })
    ),

    // ================================
    // Update
    // ================================

    on(
        fromDashboardAsyncActions.Update,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            fetching: true,
            status: ModelStatus.Pending,
        })
    ),
    on(
        fromDashboardAsyncActions.UpdateSuccess,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            fetching: false,
            status: ModelStatus.Success,
        })
    ),
    on(
        fromDashboardAsyncActions.UpdateError,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            fetching: false,
            status: ModelStatus.Error,
        })
    ),

    // ================================
    // Delete
    // ================================

    on(
        fromDashboardAsyncActions.Delete,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            fetching: true,
            status: ModelStatus.Pending,
        })
    ),
    on(
        fromDashboardAsyncActions.DeleteSuccess,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            fetching: false,
            status: ModelStatus.Success,
        })
    ),
    on(
        fromDashboardAsyncActions.DeleteError,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            fetching: false,
            status: ModelStatus.Error,
        })
    ),

    // ================================
    // Reset
    // ================================

    on(
        fromDashboardAsyncActions.Reset,
        (): BaseAsyncState => ({
            ...initialDashboardAsyncState,
        })
    )
);
