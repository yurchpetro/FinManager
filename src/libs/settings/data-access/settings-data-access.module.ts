import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadTransactionService } from '@common/services';
import { SettingsFeatureFacade } from './store/settings-feature.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FEATURE_KEY } from './store/feature.keys';
import { featureReducers } from './store/feature.reducers';
import { SettingsListEffects } from './store/settings-list/settings-list.effects';
import { SettingsAsyncEffects } from './store/settings-async/settings-async.effects';
import { SettingsDataEffects } from './store/settings-data/settings-data.effects';
import { SettingsFirebaseService } from './services/settings-firebase.service';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(FEATURE_KEY.FEATURE, featureReducers),
        EffectsModule.forFeature([SettingsListEffects, SettingsAsyncEffects, SettingsDataEffects]),
    ],
    providers: [SettingsFeatureFacade, LoadTransactionService, SettingsFirebaseService],
})
export class SettingsDataAccessModule {}
