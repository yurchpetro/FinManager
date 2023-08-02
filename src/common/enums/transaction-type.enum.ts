export enum TRANSACTION_TYPE_ENUM {
    EXPENSE = 'expense',
    REGULAR_EXPENSE = 'regular_expense',
    INCOME = 'income',
    REGULAR_INCOME = 'regular_income',
    TRANSACTION = 'transaction',
}

export type TransactionType =
    | TRANSACTION_TYPE_ENUM.EXPENSE
    | TRANSACTION_TYPE_ENUM.REGULAR_EXPENSE
    | TRANSACTION_TYPE_ENUM.INCOME
    | TRANSACTION_TYPE_ENUM.REGULAR_INCOME
    | TRANSACTION_TYPE_ENUM.TRANSACTION;
