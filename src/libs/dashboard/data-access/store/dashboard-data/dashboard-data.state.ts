import { EntityState } from '@ngrx/entity';

import { fromListDataAdapter } from './dashboard-data.adapter';
import { TransactionModel } from '@common/models';

export type DashboardDataState = EntityState<TransactionModel>;

export const initialDataState: DashboardDataState = fromListDataAdapter.getInitialState();
