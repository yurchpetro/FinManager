import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StatisticComponent } from '@pages/statistic/statistic.component';
import { StatisticRoutingModule } from '@pages/statistic/statistic-routing.module';
import { HorizontalSelectComponent } from '@common/components';
import { StatisticUiModule } from '@libs/statistic/ui/statistic-ui.module';

@NgModule({
    declarations: [StatisticComponent],
    imports: [CommonModule, StatisticRoutingModule, HorizontalSelectComponent, StatisticUiModule],
    providers: [],
})
export class StatisticModule {}
