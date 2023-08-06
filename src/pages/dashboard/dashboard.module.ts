import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardUiModule } from '@libs/dashboard/ui/dashboard-ui.module';
import { DashboardDataAccessModule } from '@libs/dashboard/data-access/dashboard-data-access.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, DashboardRoutingModule, DashboardUiModule, DashboardDataAccessModule],
    providers: [],
})
export class DashboardModule {}
