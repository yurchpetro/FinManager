import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SETTING_ITEM_ENUM, DateFormatItemModel, dateFormatConstant } from '@libs/settings/utils';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
    public isLoading$: Observable<boolean>;
    public readonly SETTING_ITEM_ENUM: typeof SETTING_ITEM_ENUM = SETTING_ITEM_ENUM;
    public dateFormatConstant: DateFormatItemModel[] = dateFormatConstant;

    public ngOnInit(): void {}

    public onDateFormat(value: string): void {
        console.log(value);
    }
}
