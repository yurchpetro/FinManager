import { BaseAsyncState } from '@common/models';
import { ModelStatus } from '@common/enums';

export const initialDashboardAsyncState: BaseAsyncState = {
    fetching: false,
    loading: false,
    status: ModelStatus.Init,
    error: null,
};
