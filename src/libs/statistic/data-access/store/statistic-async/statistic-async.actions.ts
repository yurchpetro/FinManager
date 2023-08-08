import { ActionCreatorBy } from '@core';
import { createAction, props } from '@ngrx/store';

export namespace fromStatisticAsyncActions {
    export const Load: ActionCreatorBy.Type = createAction('[Statistic] Load');
    export type Load = ReturnType<typeof Load>;

    export const LoadSuccess: ActionCreatorBy.Props<any> = createAction('[Statistic] Load Success', props<any>());
    export type LoadSuccess = ReturnType<typeof LoadSuccess>;

    export const LoadError: ActionCreatorBy.Props<{ massage: string }> = createAction(
        '[Statistic Async] Load Error',
        props<{
            massage: string;
        }>()
    );
    export type LoadError = ReturnType<typeof LoadError>;
}
