import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarTableComponent } from '@libs/calendar/ui/calandar-item/calendar-table.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [CalendarTableComponent],
    imports: [CommonModule, IonicModule],
    providers: [],
    exports: [CalendarTableComponent],
})
export class CalendarUiModule {}
