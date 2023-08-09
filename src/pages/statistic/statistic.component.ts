import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatisticFeatureFacade } from '@libs/statistic/data-access/store/statistic-feature.facade';

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticComponent {
    constructor(private readonly statisticFeatureFacade: StatisticFeatureFacade) {
        this.statisticFeatureFacade.load();
        this.statisticFeatureFacade.statisticItems$.subscribe(console.log);
    }
}
