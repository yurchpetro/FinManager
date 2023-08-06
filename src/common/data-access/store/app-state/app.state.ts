import { UserModel } from '@common/models';

export interface AppState {
    current: UserModel | null;
}

export const initialAppState: AppState = {
    current: null,
};
