import { ActionCreatorBy } from '@core';
import { createAction, props } from '@ngrx/store';
import { UserModel } from '@common/models';

export namespace fromAppActions {
    export const SetUser: ActionCreatorBy.Props<{ user: UserModel }> = createAction(
        '[FM] Set Current User',
        props<{ user: UserModel }>()
    );
    export type SetUser = ReturnType<typeof SetUser>;
}
