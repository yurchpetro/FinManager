import { GetMonthYearFunction } from '@common/utils';

export interface SettingsListState {
    mounth: string;
}

export const initialSettingsListState: SettingsListState = {
    mounth: GetMonthYearFunction(),
};
