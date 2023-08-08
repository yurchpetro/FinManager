import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarTableComponent } from './calandar-item/calendar-table.component';
import { MounthSummaryComponent } from './mounth-summary/mounth-summary.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [CalendarTableComponent, MounthSummaryComponent],
    imports: [CommonModule, IonicModule],
    providers: [],
    exports: [CalendarTableComponent, MounthSummaryComponent],
})
export class CalendarUiModule {}
