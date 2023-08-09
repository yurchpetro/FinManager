import { ActionCreatorBy } from '@core';
import { createAction, props } from '@ngrx/store';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

export namespace fromSettingsAsyncActions {
    export const Load: ActionCreatorBy.Type = createAction('[Settings Async] Load');
    export type Load = ReturnType<typeof Load>;

    export const LoadSuccess: ActionCreatorBy.Props<{ models: CalendarItemModel[] }> = createAction(
        '[Settings Async] Load Success',
        props<{ models: CalendarItemModel[] }>()
    );
    export type LoadSuccess = ReturnType<typeof LoadSuccess>;

    export const LoadError: ActionCreatorBy.Props<{ massage: string }> = createAction(
        '[Settings Async] Load Error',
        props<{
            massage: string;
        }>()
    );
    export type LoadError = ReturnType<typeof LoadError>;

    export const Upload: ActionCreatorBy.Type = createAction('[Settings Async] Upload');
    export type Upload = ReturnType<typeof Upload>;

    export const UploadSuccess: ActionCreatorBy.Props<{ models: CalendarItemModel[] }> = createAction(
        '[Settings Async] Upload Success',
        props<{ models: CalendarItemModel[] }>()
    );
    export type UploadSuccess = ReturnType<typeof UploadSuccess>;

    export const UploadError: ActionCreatorBy.Props<{ massage: string }> = createAction(
        '[Settings Async] Upload Error',
        props<{
            massage: string;
        }>()
    );
    export type UploadError = ReturnType<typeof UploadError>;
}
