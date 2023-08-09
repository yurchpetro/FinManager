import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FEATURE_KEY } from './store/feature.keys';
import { featureReducers } from './store/feature.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StatisticFeatureFacade } from './store/statistic-feature.facade';
import { StatisticListEffects } from './store/statistic-list/statistic-list.effects';
import { StatisticAsyncEffects } from './store/statistic-async/statistic-async.effects';
import { StatisticDataEffects } from './store/statistic-data/statistic-data.effects';
import { LoadTransactionService } from '@common/services';
import { CreateStatisticModelService } from '@libs/statistic/utils/service/create-statistic-model.service';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(FEATURE_KEY.FEATURE, featureReducers),
        EffectsModule.forFeature([StatisticListEffects, StatisticAsyncEffects, StatisticDataEffects]),
    ],
    providers: [StatisticFeatureFacade, LoadTransactionService, CreateStatisticModelService],
})
export class StatisticDataAccessModule {}
