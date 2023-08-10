import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { FeaturePartialState } from '../feature.state';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { fromSettingsAsyncActions } from './settings-async.actions';
import { AppFeatureFacade } from '@common/data-access';
import { SettingsFirebaseService } from '../../services/settings-firebase.service';
import { SettingsStateModel } from '@libs/settings/utils';
import { fromSettingsDataQuery } from '../settings-data/settings-data.selectors';

@Injectable()
export class SettingsAsyncEffects {
    public readonly onLoad$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSettingsAsyncActions.Load),
            concatLatestFrom(() => [this.appFeatureFacade.currentUserId$]),
            switchMap(([action, userId]: [fromSettingsAsyncActions.Load, string | null]) => {
                if (!userId) {
                    return of(fromSettingsAsyncActions.LoadError({ massage: 'Please Log In' }));
                }

                return this.settingsFirebaseService.onLoad(userId).pipe(
                    switchMap((response: SettingsStateModel) => {
                        return [
                            fromSettingsAsyncActions.LoadSuccess({
                                settings: response,
                            }),
                        ];
                    }),
                    catchError(err => of(fromSettingsAsyncActions.LoadError({ massage: err.toString() })))
                );
            })
        )
    );

    public readonly onUpdate$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromSettingsAsyncActions.Update),
            concatLatestFrom(() => [
                this.appFeatureFacade.currentUserId$,
                this.store.pipe(select(fromSettingsDataQuery.getState)),
            ]),
            switchMap(
                ([action, userId, setting]: [fromSettingsAsyncActions.Update, string | null, SettingsStateModel]) => {
                    if (!userId) {
                        return of(fromSettingsAsyncActions.UpdateError({ massage: 'Please Log In' }));
                    }

                    return this.settingsFirebaseService.onUpdate(userId, setting).pipe(
                        map(() => fromSettingsAsyncActions.UpdateSuccess()),
                        catchError(err => of(fromSettingsAsyncActions.UpdateError({ massage: err.toString() })))
                    );
                }
            )
        )
    );

    constructor(
        private readonly store: Store<FeaturePartialState>,
        private readonly actions$: Actions,
        private readonly settingsFirebaseService: SettingsFirebaseService,
        private readonly appFeatureFacade: AppFeatureFacade
    ) {}
}
