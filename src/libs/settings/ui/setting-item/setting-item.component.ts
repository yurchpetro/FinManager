import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SETTING_ITEM_ENUM, SettingItemType } from '@libs/settings/utils';

@Component({
    selector: 'app-setting-item',
    templateUrl: './setting-item.component.html',
    styleUrls: ['./setting-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingItemComponent {
    @Input() public actionType: SettingItemType;
    @Input() public title: string;
    @Input() public selectOption: string[];
    @Input() public selectDefault: string;
    @Input() public toggleChacked: boolean;
    public readonly SETTING_ITEM_ENUM: typeof SETTING_ITEM_ENUM = SETTING_ITEM_ENUM;
}
