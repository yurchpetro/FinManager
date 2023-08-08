import { EntityState } from '@ngrx/entity';

import { fromCalendarDataAdapter } from './calendar-data.adapter';
import { TransactionModel } from '@common/models';

export type CalendarDataState = EntityState<TransactionModel>;

export const initialCalendarDataState: CalendarDataState = fromCalendarDataAdapter.getInitialState();
