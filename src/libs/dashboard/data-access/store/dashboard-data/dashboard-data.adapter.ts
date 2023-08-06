import { EntityAdapter, IdSelectorStr } from '@ngrx/entity/src/models';
import { createEntityAdapter } from '@ngrx/entity';
import { TransactionModel } from '@common/models';

const selectEntityId: IdSelectorStr<TransactionModel> = (model: TransactionModel) => model.id;

export const fromListDataAdapter: EntityAdapter<TransactionModel> = createEntityAdapter<TransactionModel>({
    selectId: selectEntityId,
});
