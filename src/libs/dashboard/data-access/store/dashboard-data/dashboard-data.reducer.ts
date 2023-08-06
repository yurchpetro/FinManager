import { ActionReducer, createReducer, on } from '@ngrx/store';

import { initialDataState, DashboardDataState } from './dashboard-data.state';
import { fromDashboardDataActions } from './dashboard-data.actions';
import { fromListDataAdapter } from './dashboard-data.adapter';

export const dashboardDataReducer: ActionReducer<DashboardDataState> = createReducer(
    initialDataState,

    on(
        fromDashboardDataActions.SetAllAction,
        (state: DashboardDataState, { models }: fromDashboardDataActions.SetAllAction) => {
            return fromListDataAdapter.setAll(models, state);
        }
    ),
    on(
        fromDashboardDataActions.AddOneAction,
        (state: DashboardDataState, { model }: fromDashboardDataActions.AddOneAction) => {
            return fromListDataAdapter.addOne(model, state);
        }
    ),
    on(
        fromDashboardDataActions.UpsertManyAction,
        (state: DashboardDataState, { changes }: fromDashboardDataActions.UpsertManyAction) => {
            return fromListDataAdapter.upsertMany(changes, state);
        }
    ),
    on(
        fromDashboardDataActions.UpdateOneAction,
        (state: DashboardDataState, { id, changes }: fromDashboardDataActions.UpsertOneAction) => {
            return fromListDataAdapter.updateOne({ id, changes }, state);
        }
    ),
    on(
        fromDashboardDataActions.RemoveOneAction,
        (state: DashboardDataState, { id }: fromDashboardDataActions.RemoveOneAction) => {
            return fromListDataAdapter.removeOne(id, state);
        }
    ),
    on(
        fromDashboardDataActions.UpdateManyAction,
        (state: DashboardDataState, { changes }: fromDashboardDataActions.UpdateManyAction) => {
            return fromListDataAdapter.updateMany(changes, state);
        }
    ),

    on(fromDashboardDataActions.ClearAction, (state: DashboardDataState) => {
        return fromListDataAdapter.removeAll(state);
    })
);
