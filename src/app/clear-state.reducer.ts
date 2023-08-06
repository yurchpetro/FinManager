import { Action } from '@ngrx/store';
import { LOGOUT_ACTION, QUIT_ACTION, RESET_ACTION } from '@core';

export function clearStateReducer(reducer: (state: any, action: Action) => any): (state: any, action: Action) => any {
    return (state: any, action: Action): any => {
        if (
            action.type === RESET_ACTION.type ||
            action.type === LOGOUT_ACTION.type ||
            action.type === QUIT_ACTION.type
        ) {
            state = undefined;
        }

        return reducer(state, action);
    };
}
