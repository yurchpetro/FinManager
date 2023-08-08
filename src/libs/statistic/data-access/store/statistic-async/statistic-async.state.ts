import { BaseAsyncState } from '@common/models';
import { ModelStatus } from '@common/enums';

export const initialStatisticAsyncState: BaseAsyncState = {
    fetching: false,
    loading: false,
    status: ModelStatus.Init,
    error: null,
};
