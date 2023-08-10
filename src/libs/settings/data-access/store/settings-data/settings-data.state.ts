import { dateFormatConstant } from '@libs/settings/utils';

export interface SettingsDataState {
    dateFormat: string;
    currency: string;
}

export const initialSettingsDataState: SettingsDataState = {
    dateFormat: dateFormatConstant[0].value,
    currency: 'USD',
};
