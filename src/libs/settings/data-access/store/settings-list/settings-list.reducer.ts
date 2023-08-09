import { fromSettingsListActions } from './settings-list.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { SettingsListState, initialSettingsListState } from './settings-list.state';
export const settingsListReducer: ActionReducer<SettingsListState> = createReducer(
    initialSettingsListState,
    on(
        fromSettingsListActions.SetNextMonth,
        (state: SettingsListState, { month }: fromSettingsListActions.SetNextMonth): SettingsListState => ({
            mounth: month,
        })
    ),
    on(
        fromSettingsListActions.SetPreviousMonth,
        (state: SettingsListState, { month }: fromSettingsListActions.SetNextMonth): SettingsListState => ({
            mounth: month,
        })
    )
);
