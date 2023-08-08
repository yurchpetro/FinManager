import { TransactionType } from '@common/enums';

export interface CreateTransactionModel {
    name: string;
    description: string;
    category: string;
    amount: number;
    date: number;
    wallet: string;
    type: TransactionType;
}
