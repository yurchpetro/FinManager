import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StatisticComponent } from '@pages/statistic/statistic.component';
import { StatisticRoutingModule } from '@pages/statistic/statistic-routing.module';
import { HorizontalSelectComponent, LoaderComponent } from '@common/components';
import { StatisticUiModule } from '@libs/statistic/ui/statistic-ui.module';
import { StatisticDataAccessModule } from '@libs/statistic/data-access/statistic-data-access.module';

@NgModule({
    declarations: [StatisticComponent],
    imports: [
        CommonModule,
        StatisticRoutingModule,
        HorizontalSelectComponent,
        StatisticUiModule,
        StatisticDataAccessModule,
        LoaderComponent,
    ],
    providers: [],
})
export class StatisticModule {}
