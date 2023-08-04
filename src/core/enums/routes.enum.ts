export enum ROUTES_ENUM {
    DASHBOARD = '/dashboard',
    CALENDAR = '/calendar',
    STATISTIC = '/statistic',
    SETTINGS = '/settings',
    HOME = 'home',
}

export type RoutesType =
    | ROUTES_ENUM.CALENDAR
    | ROUTES_ENUM.DASHBOARD
    | ROUTES_ENUM.STATISTIC
    | ROUTES_ENUM.SETTINGS
    | ROUTES_ENUM.HOME;
