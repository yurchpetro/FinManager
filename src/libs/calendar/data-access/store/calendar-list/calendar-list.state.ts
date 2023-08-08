export interface CalendarListState {
    mounth: string;
}

export const initialCalendarListState: CalendarListState = {
    mounth: (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString(),
};
