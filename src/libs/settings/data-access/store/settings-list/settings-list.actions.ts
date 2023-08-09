import { ActionCreatorBy } from '@core';
import { createAction, props } from '@ngrx/store';

export namespace fromSettingsListActions {
    export const NextMonth: ActionCreatorBy.Type = createAction('[Settings List] Next Month');
    export type NextMonth = ReturnType<typeof NextMonth>;

    export const PreviousMonth: ActionCreatorBy.Type = createAction('[Settings List] Previous Month');
    export type PreviousMonth = ReturnType<typeof PreviousMonth>;

    export const SetNextMonth: ActionCreatorBy.Props<{ month: string }> = createAction(
        '[Settings List] Set Next Month',
        props<{ month: string }>()
    );
    export type SetNextMonth = ReturnType<typeof SetNextMonth>;

    export const SetPreviousMonth: ActionCreatorBy.Props<{ month: string }> = createAction(
        '[Settings List] Set Previous Month',
        props<{ month: string }>()
    );
    export type SetPreviousMonth = ReturnType<typeof SetPreviousMonth>;
}
