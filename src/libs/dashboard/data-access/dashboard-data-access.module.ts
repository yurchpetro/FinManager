import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FEATURE_KEY } from './store/feature.keys';
import { featureReducers } from './store/feature.reducers';
import { EffectsModule } from '@ngrx/effects';
import { DashboardFeatureFacade } from './store/dashboard-feature.facade';
import { DashboardAsyncEffects } from './store/dashboard-async/dashboard-async.effects';
import { DashboardListEffects } from './store/dashboard-list/dashboard-list.effects';
import { DashboardDataEffects } from './store/dashboard-data/dashboard-data.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(FEATURE_KEY.FEATURE, featureReducers),
        EffectsModule.forFeature([DashboardListEffects, DashboardAsyncEffects, DashboardDataEffects]),
    ],
    providers: [DashboardFeatureFacade],
})
export class DashboardDataAccessModule {}
