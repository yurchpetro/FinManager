import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StatisticItemModel } from '@libs/statistic/utils/model/statistic-item.model';
import { TRANSACTION_TYPE_ENUM } from '@common/enums';

@Component({
    selector: 'app-charts-panel',
    templateUrl: './charts-panel.component.html',
    styleUrls: ['./charts-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsPanelComponent implements OnInit, OnChanges {
    @Input() public statisticItems: StatisticItemModel[];
    @Input() public mounth: number;

    public expenseStatistic: StatisticItemModel[];
    public incomeStatistic: StatisticItemModel[];

    public selectedCategory: 'expense' | 'income' | 'all';
    public selectedStatistic: StatisticItemModel[];

    public ngOnInit(): void {
        this.onExpense();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes && this.statisticItems) {
            this.expenseStatistic = this.statisticItems.filter(
                (item: StatisticItemModel): boolean => item.type === TRANSACTION_TYPE_ENUM.EXPENSE
            );

            this.incomeStatistic = this.statisticItems.filter(
                (item: StatisticItemModel): boolean => item.type === TRANSACTION_TYPE_ENUM.INCOME
            );

            if (this.selectedCategory === 'expense') {
                this.onExpense();
            } else if (this.selectedCategory === 'income') {
                this.onIncome();
            } else {
                this.onAll();
            }
        }
    }

    public onExpense(): void {
        this.selectedCategory = 'expense';
        this.selectedStatistic = this.expenseStatistic;
    }

    public onIncome(): void {
        this.selectedCategory = 'income';
        this.selectedStatistic = this.incomeStatistic;
    }

    public onAll(): void {
        this.selectedCategory = 'all';
        this.selectedStatistic = this.statisticItems;
    }
}
