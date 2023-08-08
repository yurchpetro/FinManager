import { Injectable } from '@angular/core';
import { TransactionModel } from '@common/models';
import { CalendarItemModel, SummaryModel } from '../models/calendar-item.model';
import { TRANSACTION_TYPE_ENUM } from '@common/enums';

@Injectable()
export class CreateCalendarItemService {
    public readonly emptyItem: CalendarItemModel = {
        id: '',
        date: 0,
        summary: {
            expense: 0,
            income: 0,
            total: 0,
        },
        transactions: [],
    };

    public createCalendarItems(transactions: TransactionModel[]): CalendarItemModel[] {
        const calendarItems: CalendarItemModel[] = [];

        transactions.forEach((transaction: TransactionModel): void => {
            const index: number = this.dayIndex(calendarItems, transaction);
            if (index === -1) {
                const item: CalendarItemModel = {
                    id: this.getDayMounth(transaction.date),
                    date: transaction.date,
                    summary: this.newSummary(transaction),
                    transactions: [transaction],
                };

                calendarItems.push(item);
            } else {
                calendarItems[index].transactions.push(transaction);
                calendarItems[index].summary = this.calculateSummary(calendarItems[index].summary, transaction);
            }
        });

        return this.fillEmptyDay(calendarItems);
    }

    private dayIndex(calendarItems: CalendarItemModel[], transaction: TransactionModel): number {
        return calendarItems.findIndex(
            (item: CalendarItemModel): boolean => item.id === this.getDayMounth(transaction.date)
        );
    }

    private newSummary(transaction: TransactionModel): SummaryModel {
        if (transaction.type === TRANSACTION_TYPE_ENUM.INCOME) {
            return {
                expense: 0,
                income: transaction.amount,
                total: transaction.amount,
            };
        } else {
            return {
                expense: -transaction.amount,
                income: 0,
                total: -transaction.amount,
            };
        }
    }

    private calculateSummary(priviesSummary: SummaryModel, transaction: TransactionModel): SummaryModel {
        if (transaction.type === TRANSACTION_TYPE_ENUM.INCOME) {
            return {
                expense: priviesSummary.expense,
                income: priviesSummary.income + transaction.amount,
                total: priviesSummary.total + transaction.amount,
            };
        } else {
            return {
                expense: priviesSummary.expense - transaction.amount,
                income: priviesSummary.income,
                total: priviesSummary.total - transaction.amount,
            };
        }
    }

    private getDayMounth(date: number): string {
        return new Date(date).getDate().toString() + '-' + (new Date(date).getMonth() + 1).toString();
    }

    private fillEmptyDay(calendarItems: CalendarItemModel[]): CalendarItemModel[] {
        const days: number = this.getDaysInMonth(calendarItems[0].date);
        const month: number = new Date(calendarItems[0].date).getMonth() + 1;

        const existingDays: string[] = calendarItems.map((item: CalendarItemModel) => item.id);

        for (let i: number = 1; i <= days; i += 1) {
            const id: string = i + '-' + month;
            if (!existingDays.includes(id)) {
                const item: CalendarItemModel = {
                    ...this.emptyItem,
                    id,
                    date: new Date().setDate(i),
                };

                calendarItems.push(item);
            }
        }

        calendarItems = calendarItems.sort((a: CalendarItemModel, b: CalendarItemModel) => a.date - b.date);

        return calendarItems;
    }

    private getDaysInMonth(date: number): number {
        const month: number = new Date(date).getMonth() + 1;

        const daysInMonth: number[] = [
            31, // January
            28, // February (default, not considering leap years)
            31, // March
            30, // April
            31, // May
            30, // June
            31, // July
            31, // August
            30, // September
            31, // October
            30, // November
            31, // December
        ];

        return daysInMonth[month - 1];
    }
}
