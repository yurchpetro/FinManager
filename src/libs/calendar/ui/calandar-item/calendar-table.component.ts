import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-calendar-item',
    templateUrl: './calendar-table.component.html',
    styleUrls: ['./calendar-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarTableComponent {}
