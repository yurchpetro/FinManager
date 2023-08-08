import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarFeatureFacade } from '@libs/calendar/data-access/store/calendar-feature.facade';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
    constructor(private readonly calendarFeatureFacade: CalendarFeatureFacade) {
        calendarFeatureFacade.load();
        calendarFeatureFacade.transaction$.subscribe(console.warn);
    }
}
