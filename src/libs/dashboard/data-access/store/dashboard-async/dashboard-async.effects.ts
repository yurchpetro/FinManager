import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { FeaturePartialState } from '../feature.state';
import { catchError, mergeMap, Observable, of, switchMap } from 'rxjs';
import { fromDashboardAsyncActions } from './dashboard-async.actions';
import { DashboardFireService } from '../../services/dashboard-fire.service';
import { fromDashboardListQuery } from '../dashboard-list/dashboard-list.selectors';
import { AppFeatureFacade } from '@common/data-access';
import { TransactionModel } from '@common/models';

@Injectable()
export class DashboardAsyncEffects {
    public readonly onLoad$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromDashboardAsyncActions.Load),
            concatLatestFrom(() => [
                this.store.pipe(select(fromDashboardListQuery.getMounth)),
                this.appFeatureFacade.currentUserId$,
            ]),
            switchMap(([action, mounth, userId]: [fromDashboardAsyncActions.Load, string, string | null]) => {
                if (!userId) {
                    return of(fromDashboardAsyncActions.LoadError({ massage: 'Please Log In' }));
                }

                return this.dashboardFireService.onLoad(userId, mounth).pipe(
                    switchMap((response: TransactionModel[]) => {
                        return [fromDashboardAsyncActions.LoadSuccess({ models: response })];
                    }),
                    catchError(err => of(fromDashboardAsyncActions.LoadError({ massage: err.toString() })))
                );
            })
        )
    );

    public readonly onCreate$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromDashboardAsyncActions.Create),
            concatLatestFrom(() => [
                this.store.pipe(select(fromDashboardListQuery.getMounth)),
                this.appFeatureFacade.currentUserId$,
            ]),
            switchMap(
                ([{ transaction }, mounth, userId]: [fromDashboardAsyncActions.Create, string, string | null]) => {
                    if (!userId) {
                        return of(fromDashboardAsyncActions.CreateError());
                    }

                    return this.dashboardFireService.onCreate(userId, mounth, transaction).pipe(
                        mergeMap(() => {
                            return [fromDashboardAsyncActions.Load(), fromDashboardAsyncActions.CreateSuccess()];
                        }),
                        catchError(() => of(fromDashboardAsyncActions.CreateError()))
                    );
                }
            )
        )
    );

    public readonly onUpdate$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromDashboardAsyncActions.Update),
            concatLatestFrom(() => [
                this.store.pipe(select(fromDashboardListQuery.getMounth)),
                this.appFeatureFacade.currentUserId$,
            ]),
            switchMap(
                ([{ transaction }, mounth, userId]: [fromDashboardAsyncActions.Update, string, string | null]) => {
                    if (!userId) {
                        return of(fromDashboardAsyncActions.UpdateError());
                    }

                    return this.dashboardFireService.onUpdate(userId, mounth, transaction).pipe(
                        mergeMap(() => {
                            return [fromDashboardAsyncActions.Load(), fromDashboardAsyncActions.UpdateSuccess()];
                        }),
                        catchError(() => of(fromDashboardAsyncActions.UpdateSuccess()))
                    );
                }
            )
        )
    );

    public readonly onDelete$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromDashboardAsyncActions.Delete),
            concatLatestFrom(() => [
                this.store.pipe(select(fromDashboardListQuery.getMounth)),
                this.appFeatureFacade.currentUserId$,
            ]),
            switchMap(([{ id }, mounth, userId]: [fromDashboardAsyncActions.Delete, string, string | null]) => {
                if (!userId) {
                    return of(fromDashboardAsyncActions.DeleteError());
                }

                return this.dashboardFireService.onDelete(userId, mounth, id).pipe(
                    mergeMap(() => {
                        return [fromDashboardAsyncActions.Load(), fromDashboardAsyncActions.DeleteSuccess()];
                    }),
                    catchError(() => of(fromDashboardAsyncActions.DeleteError()))
                );
            })
        )
    );

    constructor(
        private readonly store: Store<FeaturePartialState>,
        private readonly actions$: Actions,
        private readonly dashboardFireService: DashboardFireService,
        private readonly appFeatureFacade: AppFeatureFacade
    ) {}
}
