import { EntityState } from '@ngrx/entity';

import { fromStatisticDataAdapter } from './statistic-data.adapter';
import { StatisticItemModel } from '@libs/statistic/utils/model/statistic-item.model';

export type StatisticDataState = EntityState<StatisticItemModel>;

export const initialStatisticDataState: StatisticDataState = fromStatisticDataAdapter.getInitialState();
