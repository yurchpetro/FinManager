import { CreateTransactionModel } from './create-transaction.model';

export interface TransactionModel extends CreateTransactionModel {
    id: string;
}
