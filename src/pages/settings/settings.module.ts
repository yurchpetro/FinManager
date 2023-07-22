import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SettingsComponent } from '@pages/settings/settings.component';
import { SettingsRoutingModule } from '@pages/settings/settings-routing.module';

@NgModule({
    declarations: [SettingsComponent],
    imports: [CommonModule, SettingsRoutingModule],
    providers: [],
})
export class SettingsModule {}
