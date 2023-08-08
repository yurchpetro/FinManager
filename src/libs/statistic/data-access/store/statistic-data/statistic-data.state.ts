import { EntityState } from '@ngrx/entity';

import { fromStatisticDataAdapter } from './statistic-data.adapter';
import { TransactionModel } from '@common/models';

export type StatisticDataState = EntityState<TransactionModel>;

export const initialStatisticDataState: StatisticDataState = fromStatisticDataAdapter.getInitialState();
