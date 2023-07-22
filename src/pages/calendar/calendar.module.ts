import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CalendarComponent } from '@pages/calendar/calendar.component';
import { CalendarRoutingModule } from '@pages/calendar/calendar-routing.module';

@NgModule({
    declarations: [CalendarComponent],
    imports: [CommonModule, CalendarRoutingModule],
    providers: [],
})
export class CalendarModule {}
