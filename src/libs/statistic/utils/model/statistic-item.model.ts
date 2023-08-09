import { TransactionModel } from '@common/models';
import { TransactionType } from '@common/enums';

export interface StatisticItemModel {
    category: string;
    amount: number;
    transactions: TransactionModel[];
    type: TransactionType;
}
