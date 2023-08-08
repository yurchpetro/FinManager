import { fromCalendarAsyncActions } from './calendar-async.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { initialCalendarAsyncState } from './calendar-async.state';
import { ModelStatus } from '@common/enums';
import { BaseAsyncState } from '@common/models';

export const calendarAsyncReducer: ActionReducer<BaseAsyncState> = createReducer(
    initialCalendarAsyncState,

    // ================================
    // Load
    // ================================

    on(
        fromCalendarAsyncActions.Load,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: true,
            status: state.status === ModelStatus.Init ? ModelStatus.Init : ModelStatus.Pending,
        })
    ),
    on(
        fromCalendarAsyncActions.LoadSuccess,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: false,
            status: ModelStatus.Success,
        })
    ),
    on(
        fromCalendarAsyncActions.LoadError,
        (state: BaseAsyncState): BaseAsyncState => ({
            ...state,
            loading: false,
            status: ModelStatus.Error,
        })
    )
);
