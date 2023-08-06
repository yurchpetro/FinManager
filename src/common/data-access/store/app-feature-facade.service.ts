import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { FeaturePartialState } from './feature.state';

import { fromAppQuery } from './app-state/app.selectors';
import { fromAppActions } from './app-state/app.actions';
import { UserModel } from '@common/models';

@Injectable()
export class AppFeatureFacade {
    // ================================
    //  Current User Selectors
    // ================================

    public readonly currentUser$: Observable<UserModel | null> = this.store.pipe(select(fromAppQuery.getUser));

    constructor(private readonly store: Store<FeaturePartialState>) {}

    // ================================
    // Current User Actions
    // ================================

    public setUser(user: UserModel): void {
        this.store.dispatch(fromAppActions.SetUser({ user }));
    }
}
