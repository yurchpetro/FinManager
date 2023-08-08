import { fromStatisticListActions } from './statistic-list.actions';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { StatisticListState, initialStatisticListState } from './statistic-list.state';

export const statisticListReducer: ActionReducer<StatisticListState> = createReducer(
    initialStatisticListState,
    on(
        fromStatisticListActions.SetNextMonth,
        (state: StatisticListState, { month }: fromStatisticListActions.SetNextMonth): StatisticListState => ({
            mounth: month,
        })
    ),
    on(
        fromStatisticListActions.SetPreviousMonth,
        (state: StatisticListState, { month }: fromStatisticListActions.SetNextMonth): StatisticListState => ({
            mounth: month,
        })
    )
);
