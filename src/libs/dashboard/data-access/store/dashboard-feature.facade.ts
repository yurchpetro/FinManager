import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { FeaturePartialState } from './feature.state';

import { CreateTransactionModel, TransactionModel } from '@common/models';
import { ModelStatus } from '@common/enums';
import { fromDashboardAsyncQuery } from './dashboard-async/dashboard-async.selectors';
import { fromDashboardAsyncActions } from './dashboard-async/dashboard-async.actions';
import { fromDashboardDataQuery } from '@libs/dashboard/data-access/store/dashboard-data/dashboard-data.selectors';

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

    public readonly transaction$: Observable<TransactionModel[]> = this.store.pipe(
        select(fromDashboardDataQuery.getAll)
    );

    constructor(private readonly store: Store<FeaturePartialState>) {}

    // ================================
    // Async Actions
    // ================================

    public load(): void {
        this.store.dispatch(fromDashboardAsyncActions.Load());
    }

    public create(transaction: CreateTransactionModel): void {
        this.store.dispatch(fromDashboardAsyncActions.Create({ transaction }));
    }

    public update(transaction: TransactionModel): void {
        this.store.dispatch(fromDashboardAsyncActions.Update({ transaction }));
    }

    public delete(id: string): void {
        this.store.dispatch(fromDashboardAsyncActions.Delete({ id }));
    }
}
