import { TransactionType } from '@common/enums';

export interface CreateTransactionModel {
    name: string;
    description: string;
    category: string;
    amount: number;
    date: Date;
    wallet: string;
    type: TransactionType;
}
