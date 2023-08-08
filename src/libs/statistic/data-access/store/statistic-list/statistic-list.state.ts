export interface StatisticListState {
    mounth: string;
}

export const initialStatisticListState: StatisticListState = {
    mounth: (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString(),
};
