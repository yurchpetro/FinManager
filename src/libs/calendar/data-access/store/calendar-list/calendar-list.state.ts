import { GetMonthYearFunction } from '@common/utils';

export interface CalendarListState {
    mounth: string;
}

export const initialCalendarListState: CalendarListState = {
    mounth: GetMonthYearFunction(),
};
