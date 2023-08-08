import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

@Component({
    selector: 'app-calendar-table',
    templateUrl: './calendar-table.component.html',
    styleUrls: ['./calendar-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarTableComponent {
    @Input() public calendarItems: CalendarItemModel[];
    @Input() public dateFormat: string = 'dd.MM';
}
