import { fromAppActions } from './app.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { AppState, initialAppState } from './app.state';

export const appReducer: ActionReducer<AppState> = createReducer(
    initialAppState,
    on(
        fromAppActions.SetUser,
        (state: AppState, { user }: fromAppActions.SetUser): AppState => ({
            ...state,
            current: user,
        })
    )
);
