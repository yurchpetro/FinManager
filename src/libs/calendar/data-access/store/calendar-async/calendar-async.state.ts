import { BaseAsyncState } from '@common/models';
import { ModelStatus } from '@common/enums';

export const initialCalendarAsyncState: BaseAsyncState = {
    fetching: false,
    loading: false,
    status: ModelStatus.Init,
    error: null,
};
