import { EntityAdapter, IdSelectorStr } from '@ngrx/entity/src/models';
import { createEntityAdapter } from '@ngrx/entity';
import { StatisticItemModel } from '@libs/statistic/utils/model/statistic-item.model';

const selectEntityId: IdSelectorStr<StatisticItemModel> = (model: StatisticItemModel) => model.category;

export const fromStatisticDataAdapter: EntityAdapter<StatisticItemModel> = createEntityAdapter<StatisticItemModel>({
    selectId: selectEntityId,
});
