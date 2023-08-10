import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SETTING_ITEM_ENUM, DateFormatItemModel, dateFormatConstant, currencyConstant } from '@libs/settings/utils';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingsFeatureFacade } from '@libs/settings/data-access/store/settings-feature.facade';
import { SelectModel } from '@common/models';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
    public isLoading$: Observable<boolean>;
    public selectedDateFormat$: Observable<DateFormatItemModel>;
    public selectedCurrency$: Observable<DateFormatItemModel>;

    public readonly currencyConstant: SelectModel[] = currencyConstant;
    public readonly dateFormatConstant: SelectModel[] = dateFormatConstant;
    public readonly SETTING_ITEM_ENUM: typeof SETTING_ITEM_ENUM = SETTING_ITEM_ENUM;

    constructor(private readonly settingsFeatureFacade: SettingsFeatureFacade) {}

    public ngOnInit(): void {
        this.settingsFeatureFacade.load();

        this.selectedDateFormat$ = this.settingsFeatureFacade.dateFormat$.pipe(
            map(value => {
                return this.dateFormatConstant.filter(item => item.value === value)[0];
            })
        );
        this.selectedCurrency$ = this.settingsFeatureFacade.currency$.pipe(
            map(value => {
                return this.currencyConstant.filter(item => item.value === value)[0];
            })
        );
    }

    public onDateFormat(value: string): void {
        this.settingsFeatureFacade.setDateFormat(value);
    }

    public onCurrency(value: string): void {
        this.settingsFeatureFacade.setCurrency(value);
    }
}
