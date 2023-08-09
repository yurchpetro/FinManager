import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { FeaturePartialState } from './feature.state';

import { ModelStatus } from '@common/enums';
import { fromSettingsAsyncQuery } from '@libs/settings/data-access/store/settings-async/settings-async.selectors';
import { fromSettingsAsyncActions } from '@libs/settings/data-access/store/settings-async/settings-async.actions';
import { fromSettingsDataQuery } from '@libs/settings/data-access/store/settings-data/settings-data.selectors';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';
import { fromSettingsListActions } from '@libs/settings/data-access/store/settings-list/settings-list.actions';
import { fromSettingsListQuery } from '@libs/settings/data-access/store/settings-list/settings-list.selectors';

@Injectable()
export class SettingsFeatureFacade {
    // ================================
    // List Selectors
    // ================================

    public readonly mounth$: Observable<string> = this.store.pipe(select(fromSettingsListQuery.getMounth));

    // ================================
    // Async Selectors
    // ================================

    public readonly loading$: Observable<boolean> = this.store.pipe(select(fromSettingsAsyncQuery.getLoadingStatus));
    public readonly upsertLoading$: Observable<ModelStatus> = this.store.pipe(
        select(fromSettingsAsyncQuery.getModelStatus)
    );
    public readonly fetching$: Observable<boolean> = this.store.pipe(select(fromSettingsAsyncQuery.getFetchingStatus));
    public readonly error$: Observable<string | null | undefined> = this.store.pipe(
        select(fromSettingsAsyncQuery.getErrorMassage)
    );

    constructor(private readonly store: Store<FeaturePartialState>) {}

    // ================================
    // List Actions
    // ================================

    public nextMonth(): void {
        this.store.dispatch(fromSettingsListActions.NextMonth());
    }

    public previousMonth(): void {
        this.store.dispatch(fromSettingsListActions.PreviousMonth());
    }

    // ================================
    // Async Actions
    // ================================

    public load(): void {
        this.store.dispatch(fromSettingsAsyncActions.Load());
    }
}
