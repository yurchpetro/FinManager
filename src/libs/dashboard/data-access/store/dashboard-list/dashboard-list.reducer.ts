import { fromDashboardActions } from './dashboard-list.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { DashboardListState, initialAppState } from './dashboard-list.state';

export const dashboardListReducer: ActionReducer<DashboardListState> = createReducer(initialAppState);
