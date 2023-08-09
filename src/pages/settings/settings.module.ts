import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SettingsComponent } from '@pages/settings/settings.component';
import { SettingsRoutingModule } from '@pages/settings/settings-routing.module';
import { SettingsUiModule } from '@libs/settings/ui/settings-ui.module';
import { LoaderComponent } from '@common/components';
import { SettingsDataAccessModule } from '@libs/settings/data-access/settings-data-access.module';

@NgModule({
    declarations: [SettingsComponent],
    imports: [CommonModule, SettingsRoutingModule, SettingsUiModule, LoaderComponent, SettingsDataAccessModule],
    providers: [],
})
export class SettingsModule {}
