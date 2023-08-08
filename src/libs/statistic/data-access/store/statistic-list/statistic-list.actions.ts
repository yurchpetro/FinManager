import { ActionCreatorBy } from '@core';
import { createAction, props } from '@ngrx/store';

export namespace fromStatisticListActions {
    export const NextMonth: ActionCreatorBy.Type = createAction('[Statistic List] Next Month');
    export type NextMonth = ReturnType<typeof NextMonth>;

    export const PreviousMonth: ActionCreatorBy.Type = createAction('[Statistic List] Previous Month');
    export type PreviousMonth = ReturnType<typeof PreviousMonth>;

    export const SetNextMonth: ActionCreatorBy.Props<{ month: string }> = createAction(
        '[Statistic List] Set Next Month',
        props<{ month: string }>()
    );
    export type SetNextMonth = ReturnType<typeof SetNextMonth>;

    export const SetPreviousMonth: ActionCreatorBy.Props<{ month: string }> = createAction(
        '[Statistic List] Set Previous Month',
        props<{ month: string }>()
    );
    export type SetPreviousMonth = ReturnType<typeof SetPreviousMonth>;
}
