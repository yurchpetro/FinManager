import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureReducers } from './store/feature.reducers';
import { FEATURE_KEY } from './store/feature.keys';
import { AppFeatureFacade } from './store/app-feature-facade.service';

@NgModule({
    imports: [CommonModule, StoreModule.forFeature(FEATURE_KEY.FEATURE, featureReducers)],
    providers: [AppFeatureFacade],
})
export class CommonDataAccessModule {}
