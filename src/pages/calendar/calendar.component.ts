import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarFeatureFacade } from '@libs/calendar/data-access/store/calendar-feature.facade';
import { Observable } from 'rxjs';
import { CalendarItemModel, SummaryModel } from '@libs/calendar/utils/models/calendar-item.model';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
    public calendarItems$: Observable<CalendarItemModel[]>;
    public mounth$: Observable<number>;
    public mounthSummary$: Observable<SummaryModel>;

    constructor(private readonly calendarFeatureFacade: CalendarFeatureFacade) {}

    public ngOnInit(): void {
        this.calendarFeatureFacade.load();
        this.calendarItems$ = this.calendarFeatureFacade.calendarItems$;
        this.mounth$ = this.calendarFeatureFacade.mounth$.pipe(
            map((value: string) => {
                const date: string[] = value.split('-');

                return new Date().setFullYear(+date[1], +date[0] - 1);
            })
        );

        this.mounthSummary$ = this.calendarFeatureFacade.calendarItems$.pipe(
            map((value: CalendarItemModel[]): SummaryModel => {
                let income: number = 0;
                let expense: number = 0;

                value.forEach((item: CalendarItemModel): void => {
                    income += item.summary.income;
                    expense += item.summary.expense;
                });

                return {
                    income,
                    expense,
                    total: income + expense,
                };
            })
        );
    }

    public previousMonth(): void {
        this.calendarFeatureFacade.previousMonth();
    }

    public nextMounth(): void {
        this.calendarFeatureFacade.nextMonth();
    }
}
