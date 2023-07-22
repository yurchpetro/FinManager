import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticComponent } from '@pages/statistic/statistic.component';

const routes: Routes = [
    {
        component: StatisticComponent,
        path: '',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StatisticRoutingModule {}
