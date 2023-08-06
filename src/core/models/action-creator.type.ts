import { ActionCreator, NotAllowedCheck } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

/**
 * Types for `createAction` method
 */
export namespace ActionCreatorBy {
    export type Type<T extends string = string> = ActionCreator<T, () => TypedAction<T>>;
    export type Props<P extends object, T extends string = string> = ActionCreator<
        T,
        (props: P & NotAllowedCheck<P>) => P & TypedAction<T>
    >;
}
