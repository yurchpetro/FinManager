import { fromStatisticAsyncActions } from './statistic-async.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { initialStatisticAsyncState } from './statistic-async.state';
import { ModelStatus } from '@common/enums';
import { BaseAsyncState } from '@common/models';

export const statisticAsyncReducer: ActionReducer<BaseAsyncState> = createReducer(
    initialStatisticAsyncState,

    // ================================
    // Load
    // ================================

    on(
        fromStatisticAsyncActions.Load,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: true,
            status: state.status === ModelStatus.Init ? ModelStatus.Init : ModelStatus.Pending,
        })
    ),
    on(
        fromStatisticAsyncActions.LoadSuccess,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: false,
            status: ModelStatus.Success,
        })
    ),
    on(
        fromStatisticAsyncActions.LoadError,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: false,
            status: ModelStatus.Error,
        })
    )
);
