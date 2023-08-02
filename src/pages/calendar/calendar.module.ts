import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CalendarComponent } from '@pages/calendar/calendar.component';
import { CalendarRoutingModule } from '@pages/calendar/calendar-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [CalendarComponent],
    imports: [CommonModule, CalendarRoutingModule, IonicModule],
    providers: [],
})
export class CalendarModule {}
