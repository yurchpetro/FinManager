import { UserModel } from '@common/models';

export interface DashboardListState {
    current: UserModel | null;
}

export const initialAppState: DashboardListState = {
    current: null,
};
