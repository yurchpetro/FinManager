import { ModelStatus } from '../enums';

export interface BaseAsyncState {
    loading: boolean;
    fetching: boolean;
    status: ModelStatus;
    error: string | null;
}
