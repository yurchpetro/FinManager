import { fromDashboardActions } from './dashboard-list.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { DashboardListState, initialDashboardListState } from './dashboard-list.state';

export const dashboardListReducer: ActionReducer<DashboardListState> = createReducer(initialDashboardListState);
