import { EntityAdapter, IdSelectorStr } from '@ngrx/entity/src/models';
import { createEntityAdapter } from '@ngrx/entity';
import { CalendarItemModel } from '@libs/calendar/utils/models/calendar-item.model';

const selectEntityId: IdSelectorStr<CalendarItemModel> = (model: CalendarItemModel) => model.id;

export const fromCalendarDataAdapter: EntityAdapter<CalendarItemModel> = createEntityAdapter<CalendarItemModel>({
    selectId: selectEntityId,
});
