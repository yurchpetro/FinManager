import { TransactionType } from '../enums/transaction-type.enum';

export interface TransactionModel {
    id: string;
    name: string;
    description: string;
    category: string;
    amount: number;
    date: Date;
    wallet: string;
    type: TransactionType;
}
