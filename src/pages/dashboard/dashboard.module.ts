import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardUiModule } from '@libs/dashboard/ui/dashboard-ui.module';
import { DashboardDataAccessModule } from '@libs/dashboard/data-access/dashboard-data-access.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HorizontalSelectComponent, DatepickerComponent, LoaderComponent } from '@common/components';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DashboardUiModule,
        DashboardDataAccessModule,
        IonicModule,
        ReactiveFormsModule,
        HorizontalSelectComponent,
        DatepickerComponent,
        LoaderComponent,
    ],
    providers: [],
})
export class DashboardModule {}
