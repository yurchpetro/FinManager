import { ActionCreatorBy } from '@core';
import { createAction, props } from '@ngrx/store';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

export namespace fromCalendarAsyncActions {
    export const Load: ActionCreatorBy.Type = createAction('[Calendar] Load');
    export type Load = ReturnType<typeof Load>;

    export const LoadSuccess: ActionCreatorBy.Props<{ models: CalendarItemModel[] }> = createAction(
        '[Calendar] Load Success',
        props<{ models: CalendarItemModel[] }>()
    );
    export type LoadSuccess = ReturnType<typeof LoadSuccess>;

    export const LoadError: ActionCreatorBy.Props<{ massage: string }> = createAction(
        '[Calendar Async] Load Error',
        props<{
            massage: string;
        }>()
    );
    export type LoadError = ReturnType<typeof LoadError>;
}
