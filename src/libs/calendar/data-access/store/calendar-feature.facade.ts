import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { FeaturePartialState } from './feature.state';

import { TransactionModel } from '@common/models';
import { ModelStatus } from '@common/enums';
import { fromCalendarAsyncQuery } from './calendar-async/calendar-async.selectors';
import { fromCalendarAsyncActions } from './calendar-async/calendar-async.actions';
import { fromCalendarDataQuery } from './calendar-data/calendar-data.selectors';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

@Injectable()
export class CalendarFeatureFacade {
    // ================================
    // Async Selectors
    // ================================

    public readonly loading$: Observable<boolean> = this.store.pipe(select(fromCalendarAsyncQuery.getLoadingStatus));
    public readonly upsertLoading$: Observable<ModelStatus> = this.store.pipe(
        select(fromCalendarAsyncQuery.getModelStatus)
    );
    public readonly fetching$: Observable<boolean> = this.store.pipe(select(fromCalendarAsyncQuery.getFetchingStatus));
    public readonly error$: Observable<string | null | undefined> = this.store.pipe(
        select(fromCalendarAsyncQuery.getErrorMassage)
    );

    public readonly calendarItems$: Observable<CalendarItemModel[]> = this.store.pipe(
        select(fromCalendarDataQuery.getAll)
    );

    constructor(private readonly store: Store<FeaturePartialState>) {}

    // ================================
    // Async Actions
    // ================================

    public load(): void {
        this.store.dispatch(fromCalendarAsyncActions.Load());
    }
}
