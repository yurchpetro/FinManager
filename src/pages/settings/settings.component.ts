import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SETTING_ITEM_ENUM, DateFormatItemModel, dateFormatConstant } from '@libs/settings/utils';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingsFeatureFacade } from '@libs/settings/data-access/store/settings-feature.facade';

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
    public selectedDateFormat$: Observable<DateFormatItemModel>;

    constructor(private readonly settingsFeatureFacade: SettingsFeatureFacade) {}

    public ngOnInit(): void {
        this.settingsFeatureFacade.load();

        this.selectedDateFormat$ = this.settingsFeatureFacade.dateFormat$.pipe(
            map(value => {
                return this.dateFormatConstant.filter(item => item.value === value)[0];
            })
        );
    }

    public onDateFormat(value: string): void {
        this.settingsFeatureFacade.setDateFormat(value);
    }
}
