import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SETTING_ITEM_ENUM } from '@libs/settings/utils';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
    public readonly SETTING_ITEM_ENUM: typeof SETTING_ITEM_ENUM = SETTING_ITEM_ENUM;
}
