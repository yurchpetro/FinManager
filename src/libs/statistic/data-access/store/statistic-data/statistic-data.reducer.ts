import { ActionReducer, createReducer, on } from '@ngrx/store';

import { initialStatisticDataState, StatisticDataState } from './statistic-data.state';
import { fromStatisticDataActions } from './statistic-data.actions';
import { fromStatisticDataAdapter } from './statistic-data.adapter';

export const statisticDataReducer: ActionReducer<StatisticDataState> = createReducer(
    initialStatisticDataState,

    on(
        fromStatisticDataActions.SetAllAction,
        (state: StatisticDataState, { models }: fromStatisticDataActions.SetAllAction) => {
            return fromStatisticDataAdapter.setAll(models, state);
        }
    ),
    on(
        fromStatisticDataActions.AddOneAction,
        (state: StatisticDataState, { model }: fromStatisticDataActions.AddOneAction) => {
            return fromStatisticDataAdapter.addOne(model, state);
        }
    ),
    on(
        fromStatisticDataActions.UpsertManyAction,
        (state: StatisticDataState, { changes }: fromStatisticDataActions.UpsertManyAction) => {
            return fromStatisticDataAdapter.upsertMany(changes, state);
        }
    ),
    on(
        fromStatisticDataActions.UpdateOneAction,
        (state: StatisticDataState, { id, changes }: fromStatisticDataActions.UpsertOneAction) => {
            return fromStatisticDataAdapter.updateOne({ id, changes }, state);
        }
    ),
    on(
        fromStatisticDataActions.RemoveOneAction,
        (state: StatisticDataState, { id }: fromStatisticDataActions.RemoveOneAction) => {
            return fromStatisticDataAdapter.removeOne(id, state);
        }
    ),
    on(
        fromStatisticDataActions.UpdateManyAction,
        (state: StatisticDataState, { changes }: fromStatisticDataActions.UpdateManyAction) => {
            return fromStatisticDataAdapter.updateMany(changes, state);
        }
    ),

    on(fromStatisticDataActions.ClearAction, (state: StatisticDataState) => {
        return fromStatisticDataAdapter.removeAll(state);
    })
);
