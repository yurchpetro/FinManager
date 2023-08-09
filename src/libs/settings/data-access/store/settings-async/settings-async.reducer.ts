import { fromSettingsAsyncActions } from './settings-async.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { initialSettingsAsyncState } from './settings-async.state';
import { ModelStatus } from '@common/enums';
import { BaseAsyncState } from '@common/models';

export const settingsAsyncReducer: ActionReducer<BaseAsyncState> = createReducer(
    initialSettingsAsyncState,

    // ================================
    // Load
    // ================================

    on(
        fromSettingsAsyncActions.Load,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: true,
            status: state.status === ModelStatus.Init ? ModelStatus.Init : ModelStatus.Pending,
        })
    ),
    on(
        fromSettingsAsyncActions.LoadSuccess,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: false,
            status: ModelStatus.Success,
        })
    ),
    on(
        fromSettingsAsyncActions.LoadError,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: false,
            status: ModelStatus.Error,
        })
    )
);
