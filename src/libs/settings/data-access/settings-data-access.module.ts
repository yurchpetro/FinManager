import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadTransactionService } from '@common/services';
import { SettingsFeatureFacade } from './store/settings-feature.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FEATURE_KEY } from './store/feature.keys';
import { featureReducers } from './store/feature.reducers';
import { SettingsListEffects } from '@libs/settings/data-access/store/settings-list/settings-list.effects';
import { SettingsAsyncEffects } from '@libs/settings/data-access/store/settings-async/settings-async.effects';
import { SettingsDataEffects } from '@libs/settings/data-access/store/settings-data/settings-data.effects';
import { CreateCalendarItemService } from '@libs/calendar/utils/services/create-calendar-item.service';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(FEATURE_KEY.FEATURE, featureReducers),
        EffectsModule.forFeature([SettingsListEffects, SettingsAsyncEffects, SettingsDataEffects]),
    ],
    providers: [SettingsFeatureFacade, LoadTransactionService, CreateCalendarItemService],
})
export class SettingsDataAccessModule {}
