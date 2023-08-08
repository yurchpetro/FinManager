import { EntityState } from '@ngrx/entity';

import { fromCalendarDataAdapter } from './calendar-data.adapter';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

export type CalendarDataState = EntityState<CalendarItemModel>;

export const initialCalendarDataState: CalendarDataState = fromCalendarDataAdapter.getInitialState();
