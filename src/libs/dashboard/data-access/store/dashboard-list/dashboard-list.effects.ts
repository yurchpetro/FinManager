import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { FeaturePartialState } from '../feature.state';

@Injectable()
export class DashboardListEffects {
    constructor(
        private readonly store: Store<FeaturePartialState>,
        private readonly actions$: Actions
    ) {}
}
