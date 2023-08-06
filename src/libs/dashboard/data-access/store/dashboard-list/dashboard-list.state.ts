export interface DashboardListState {
    mounth: string;
}

export const initialDashboardListState: DashboardListState = {
    mounth: (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString(),
};
