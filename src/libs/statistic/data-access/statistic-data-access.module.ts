import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FEATURE_KEY } from './store/feature.keys';
import { featureReducers } from './store/feature.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StatisticFeatureFacade } from './store/statistic-feature.facade';
import { StatisticAsyncEffects } from './store/statistic-async/statistic-async.effects';
import { StatisticListEffects } from './store/statistic-list/statistic-list.effects';
import { StatisticDataEffects } from './store/statistic-data/statistic-data.effects';
import { LoadTransactionService } from '@common/services';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(FEATURE_KEY.FEATURE, featureReducers),
        EffectsModule.forFeature([StatisticListEffects, StatisticAsyncEffects, StatisticDataEffects]),
    ],
    providers: [StatisticFeatureFacade, LoadTransactionService],
})
export class StatisticDataAccessModule {}
