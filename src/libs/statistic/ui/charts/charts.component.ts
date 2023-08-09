import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StatisticItemModel } from '@libs/statistic/utils/model/statistic-item.model';
import { CategoryModel } from '@common/models';
import { ExpenseCategoryConst, IncomeCategoryConst } from '@common/constants';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsComponent implements OnChanges {
    @Input() public statisticItems: StatisticItemModel[];
    @Input() public mounth: number;
    @Input() public dateFormat: string = 'MMMM yyyy';

    public labels: string[];
    public backgroundColor: string[];
    public data: number[];
    public categories: { category: string; color: string }[];

    private readonly categoriesModels: CategoryModel[] = [...ExpenseCategoryConst, ...IncomeCategoryConst];

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes && this.statisticItems) {
            this.labels = this.statisticItems.map((item: StatisticItemModel) => item.category);
            this.data = this.statisticItems.map((item: StatisticItemModel) => item.amount);
            this.backgroundColor = this.findColorForCategory(this.labels);
            this.labels = this.labels.map((item: string) => item.charAt(0).toUpperCase() + item.slice(1));

            this.categories = this.labels.map((item: string, index: number) => ({
                category: item,
                color: this.backgroundColor[index],
            }));
        }
    }

    private findColorForCategory(labels: string[]): string[] {
        const colors: string[] = [];
        labels.forEach((label: string): void => {
            colors.push(
                this.categoriesModels.find((category: CategoryModel): boolean => category.name === label)!.color
            );
        });
        return colors;
    }
}
