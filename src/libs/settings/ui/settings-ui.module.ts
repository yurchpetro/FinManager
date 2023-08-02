import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { SettingItemComponent } from '@libs/settings/ui/setting-item/setting-item.component';

@NgModule({
    declarations: [SettingItemComponent],
    imports: [CommonModule, IonicModule],
    exports: [SettingItemComponent],
})
export class SettingsUiModule {}
