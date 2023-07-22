import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StatisticComponent } from '@pages/statistic/statistic.component';
import { StatisticRoutingModule } from '@pages/statistic/statistic-routing.module';

@NgModule({
    declarations: [StatisticComponent],
    imports: [CommonModule, StatisticRoutingModule],
    providers: [],
})
export class StatisticModule {}
