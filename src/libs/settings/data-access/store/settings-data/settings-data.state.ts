import { dateFormatConstant, SettingsStateModel } from '@libs/settings/utils';

export type SettingsDataState = SettingsStateModel;

export const initialSettingsDataState: SettingsDataState = {
    dateFormat: dateFormatConstant[0].value,
    currency: 'USD',
};
