import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FeaturePartialState } from './feature.state';
import { ModelStatus } from '@common/enums';
import { TransactionModel } from '@common/models';
import { fromStatisticAsyncQuery } from './statistic-async/statistic-async.selectors';
import { fromStatisticDataQuery } from './statistic-data/statistic-data.selectors';
import { fromStatisticAsyncActions } from './statistic-async/statistic-async.actions';
import { fromStatisticListQuery } from './statistic-list/statistic-list.selectors';
import { fromStatisticListActions } from './statistic-list/statistic-list.actions';

@Injectable()
export class StatisticFeatureFacade {
    // ================================
    // List Selectors
    // ================================

    public readonly mounth$: Observable<string> = this.store.pipe(select(fromStatisticListQuery.getMounth));
    // ================================
    // Async Selectors
    // ================================

    public readonly loading$: Observable<boolean> = this.store.pipe(select(fromStatisticAsyncQuery.getLoadingStatus));
    public readonly upsertLoading$: Observable<ModelStatus> = this.store.pipe(
        select(fromStatisticAsyncQuery.getModelStatus)
    );
    public readonly fetching$: Observable<boolean> = this.store.pipe(select(fromStatisticAsyncQuery.getFetchingStatus));
    public readonly error$: Observable<string | null | undefined> = this.store.pipe(
        select(fromStatisticAsyncQuery.getErrorMassage)
    );

    public readonly transaction$: Observable<TransactionModel[]> = this.store.pipe(
        select(fromStatisticDataQuery.getAll)
    );

    constructor(private readonly store: Store<FeaturePartialState>) {}

    // ================================
    // List Actions
    // ================================

    public nextMonth(): void {
        this.store.dispatch(fromStatisticListActions.NextMonth());
    }

    public previousMonth(): void {
        this.store.dispatch(fromStatisticListActions.PreviousMonth());
    }

    // ================================
    // Async Actions
    // ================================

    public load(): void {
        this.store.dispatch(fromStatisticAsyncActions.Load());
    }
}
