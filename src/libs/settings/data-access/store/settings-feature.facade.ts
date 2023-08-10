import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { FeaturePartialState } from './feature.state';

import { ModelStatus } from '@common/enums';
import { fromSettingsAsyncQuery } from './settings-async/settings-async.selectors';
import { fromSettingsAsyncActions } from './settings-async/settings-async.actions';
import { fromSettingsDataQuery } from './settings-data/settings-data.selectors';
import { fromSettingsListActions } from './settings-list/settings-list.actions';
import { fromSettingsListQuery } from './settings-list/settings-list.selectors';
import { fromSettingsDataActions } from './settings-data/settings-data.actions';
import { SettingsStateModel } from '@libs/settings/utils';

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

    // ================================
    // Date Selectors
    // ================================

    public readonly settings$: Observable<SettingsStateModel> = this.store.pipe(select(fromSettingsDataQuery.getState));
    public readonly currency$: Observable<string> = this.store.pipe(select(fromSettingsDataQuery.getCurrency));
    public readonly dateFormat$: Observable<string> = this.store.pipe(select(fromSettingsDataQuery.getDateFormat));

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

    // ================================
    // Date Actions
    // ================================

    public setCurrency(currency: string): void {
        this.store.dispatch(fromSettingsDataActions.SetCurrencyAction({ currency }));
    }

    public setDateFormat(dateFormat: string): void {
        this.store.dispatch(fromSettingsDataActions.SetDateFormatAction({ dateFormat }));
    }
}
