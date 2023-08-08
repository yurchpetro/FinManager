import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarFeatureFacade } from '@libs/calendar/data-access/store/calendar-feature.facade';
import { Observable } from 'rxjs';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
    public calendarItems$: Observable<CalendarItemModel[]>;

    constructor(private readonly calendarFeatureFacade: CalendarFeatureFacade) {}

    public ngOnInit(): void {
        this.calendarFeatureFacade.load();
        this.calendarItems$ = this.calendarFeatureFacade.calendarItems$;
    }
}
