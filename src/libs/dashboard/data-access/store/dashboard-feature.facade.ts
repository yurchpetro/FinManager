import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { FeaturePartialState } from './feature.state';

import { UserModel } from '@common/models';
import { ModelStatus } from '@common/enums';
import { fromDashboardAsyncQuery } from './dashboard-async/dashboard-async.selectors';
import { fromDashboardAsyncActions } from './dashboard-async/dashboard-async.actions';

@Injectable()
export class DashboardFeatureFacade {
    // ================================
    // Async Selectors
    // ================================

    public readonly loading$: Observable<boolean> = this.store.pipe(select(fromDashboardAsyncQuery.getLoadingStatus));
    public readonly upsertLoading$: Observable<ModelStatus> = this.store.pipe(
        select(fromDashboardAsyncQuery.getModelStatus)
    );
    public readonly fetching$: Observable<boolean> = this.store.pipe(select(fromDashboardAsyncQuery.getFetchingStatus));
    public readonly error$: Observable<string | null | undefined> = this.store.pipe(
        select(fromDashboardAsyncQuery.getErrorMassage)
    );

    constructor(private readonly store: Store<FeaturePartialState>) {}

    // ================================
    // Async Actions
    // ================================

    public Load(): void {
        this.store.dispatch(fromDashboardAsyncActions.Load());
    }
}
