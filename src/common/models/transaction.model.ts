import { TransactionType } from '../enums/transaction-type.enum';

export interface TransactionModel {
    name: string;
    description: string;
    category: string;
    amount: number;
    date: Date;
    wallet: string;
    type: TransactionType;
}
