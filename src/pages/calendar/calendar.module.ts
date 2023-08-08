import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CalendarComponent } from '@pages/calendar/calendar.component';
import { CalendarRoutingModule } from '@pages/calendar/calendar-routing.module';
import { IonicModule } from '@ionic/angular';
import { HorizontalSelectComponent } from '@common/components';
import { CalendarUiModule } from '@libs/calendar/ui/calendar-ui.module';

@NgModule({
    declarations: [CalendarComponent],
    imports: [CommonModule, CalendarRoutingModule, IonicModule, HorizontalSelectComponent, CalendarUiModule],
    providers: [],
})
export class CalendarModule {}
