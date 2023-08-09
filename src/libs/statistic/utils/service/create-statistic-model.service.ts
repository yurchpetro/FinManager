import { Injectable } from '@angular/core';
import { TransactionModel } from '@common/models';
import { StatisticItemModel } from '../model/statistic-item.model';

@Injectable()
export class CreateStatisticModelService {
    public createStatisticItem(transactions: TransactionModel[]): StatisticItemModel[] {
        const statisticItem: StatisticItemModel[] = [];

        transactions.forEach((transaction: TransactionModel): void => {
            const index: number = this.dayIndex(statisticItem, transaction);
            if (index === -1) {
                const item: StatisticItemModel = {
                    category: transaction.category,
                    amount: transaction.amount,
                    transactions: [transaction],
                    type: transaction.type,
                };

                statisticItem.push(item);
            } else {
                statisticItem[index].transactions.push(transaction);
                statisticItem[index].amount += transaction.amount;
            }
        });

        return statisticItem;
    }

    private dayIndex(statisticItem: StatisticItemModel[], transaction: TransactionModel): number {
        return statisticItem.findIndex((item: StatisticItemModel): boolean => item.category === transaction.category);
    }
}
