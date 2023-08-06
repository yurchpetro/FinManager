import { ActionCreator, NotAllowedCheck } from '@ngrx/store';
import { FunctionWithParametersType, TypedAction } from '@ngrx/store/src/models';

/**
 * Types for `createAction` method
 */
export namespace ActionCreatorBy {
    export type Type<T extends string = string> = ActionCreator<T, () => TypedAction<T>>;
    export type Props<P extends object, T extends string = string> = ActionCreator<
        T,
        (props: P & NotAllowedCheck<P>) => P & TypedAction<T>
    >;
    export type Creator<T extends string, P extends any[], R extends object> = FunctionWithParametersType<P, R & TypedAction<T>> &
        TypedAction<T>;
}
