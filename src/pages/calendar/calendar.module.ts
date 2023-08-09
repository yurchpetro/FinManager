import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CalendarComponent } from '@pages/calendar/calendar.component';
import { CalendarRoutingModule } from '@pages/calendar/calendar-routing.module';
import { IonicModule } from '@ionic/angular';
import { HorizontalSelectComponent, LoaderComponent } from '@common/components';
import { CalendarUiModule } from '@libs/calendar/ui/calendar-ui.module';
import { CalendarDataAccessModule } from '@libs/calendar/data-access/calendar-data-access.module';

@NgModule({
    declarations: [CalendarComponent],
    imports: [
        CommonModule,
        CalendarRoutingModule,
        IonicModule,
        HorizontalSelectComponent,
        CalendarUiModule,
        CalendarDataAccessModule,
        LoaderComponent,
    ],
    providers: [],
})
export class CalendarModule {}
