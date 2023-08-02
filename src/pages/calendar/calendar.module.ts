import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CalendarComponent } from '@pages/calendar/calendar.component';
import { CalendarRoutingModule } from '@pages/calendar/calendar-routing.module';
import { IonicModule } from '@ionic/angular';
import { HorizontalSelectComponent } from '../../common/components/horizontal-select/horizontal-select.component';

@NgModule({
    declarations: [CalendarComponent],
    imports: [CommonModule, CalendarRoutingModule, IonicModule, HorizontalSelectComponent],
    providers: [],
})
export class CalendarModule {}
