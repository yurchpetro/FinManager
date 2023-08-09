import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StatisticFeatureFacade } from '@libs/statistic/data-access/store/statistic-feature.facade';
import { Observable } from 'rxjs';
import { StatisticItemModel } from '@libs/statistic/utils/model/statistic-item.model';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticComponent implements OnInit {
    public statisticItems$: Observable<StatisticItemModel[]>;
    public mounth$: Observable<number>;
    public isLoading$: Observable<boolean>;

    constructor(private readonly statisticFeatureFacade: StatisticFeatureFacade) {}

    public ngOnInit(): void {
        this.statisticFeatureFacade.load();
        this.isLoading$ = this.statisticFeatureFacade.loading$;
        this.statisticItems$ = this.statisticFeatureFacade.statisticItems$;
        this.mounth$ = this.statisticFeatureFacade.mounth$.pipe(
            map((value: string) => {
                const date: string[] = value.split('-');

                return new Date().setFullYear(+date[1], +date[0] - 1);
            })
        );
    }

    public previousMonth(): void {
        this.statisticFeatureFacade.previousMonth();
    }

    public nextMounth(): void {
        this.statisticFeatureFacade.nextMonth();
    }
}
