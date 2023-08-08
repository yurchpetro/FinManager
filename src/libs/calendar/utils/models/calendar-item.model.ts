import { TransactionModel } from '@common/models';

export interface CalendarItemModel {
    id: string;
    date: number;
    summary: SummaryModel;
    transactions: TransactionModel[];
}

export interface SummaryModel {
    income: number;
    expense: number;
    total: number;
}
