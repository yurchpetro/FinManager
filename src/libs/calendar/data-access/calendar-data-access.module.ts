import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadTransactionService } from '@common/services';
import { CalendarFeatureFacade } from './store/calendar-feature.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FEATURE_KEY } from './store/feature.keys';
import { featureReducers } from './store/feature.reducers';
import { CalendarListEffects } from './store/calendar-list/calendar-list.effects';
import { CalendarAsyncEffects } from './store/calendar-async/calendar-async.effects';
import { CalendarDataEffects } from './store/calendar-data/calendar-data.effects';
import { CreateCalendarItemService } from '@libs/calendar/utils/services/create-calendar-item.service';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(FEATURE_KEY.FEATURE, featureReducers),
        EffectsModule.forFeature([CalendarListEffects, CalendarAsyncEffects, CalendarDataEffects]),
    ],
    providers: [CalendarFeatureFacade, LoadTransactionService, CreateCalendarItemService],
})
export class CalendarDataAccessModule {}
