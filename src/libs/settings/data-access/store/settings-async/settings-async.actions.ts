import { ActionCreatorBy } from '@core';
import { createAction, props } from '@ngrx/store';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';
import { SettingsStateModel } from '@libs/settings/utils';

export namespace fromSettingsAsyncActions {
    export const Load: ActionCreatorBy.Type = createAction('[Settings Async] Load');
    export type Load = ReturnType<typeof Load>;

    export const LoadSuccess: ActionCreatorBy.Props<{ settings: SettingsStateModel }> = createAction(
        '[Settings Async] Load Success',
        props<{ settings: SettingsStateModel }>()
    );
    export type LoadSuccess = ReturnType<typeof LoadSuccess>;

    export const LoadError: ActionCreatorBy.Props<{ massage: string }> = createAction(
        '[Settings Async] Load Error',
        props<{
            massage: string;
        }>()
    );
    export type LoadError = ReturnType<typeof LoadError>;

    export const Update: ActionCreatorBy.Type = createAction('[Settings Async] Upload');
    export type Update = ReturnType<typeof Update>;

    export const UpdateSuccess: ActionCreatorBy.Type = createAction('[Settings Async] Upload Success');
    export type UpdateSuccess = ReturnType<typeof UpdateSuccess>;

    export const UpdateError: ActionCreatorBy.Props<{ massage: string }> = createAction(
        '[Settings Async] Upload Error',
        props<{
            massage: string;
        }>()
    );
    export type UpdateError = ReturnType<typeof UpdateError>;
}
