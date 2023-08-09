import { ActionCreatorBy } from '@core';
import { createAction, props } from '@ngrx/store';
import { StatisticItemModel } from '@libs/statistic/utils/model/statistic-item.model';

export namespace fromStatisticAsyncActions {
    export const Load: ActionCreatorBy.Type = createAction('[Statistic] Load');
    export type Load = ReturnType<typeof Load>;

    export const LoadSuccess: ActionCreatorBy.Props<{ models: StatisticItemModel[] }> = createAction(
        '[Statistic] Load Success',
        props<{ models: StatisticItemModel[] }>()
    );
    export type LoadSuccess = ReturnType<typeof LoadSuccess>;

    export const LoadError: ActionCreatorBy.Props<{ massage: string }> = createAction(
        '[Statistic Async] Load Error',
        props<{
            massage: string;
        }>()
    );
    export type LoadError = ReturnType<typeof LoadError>;
}
