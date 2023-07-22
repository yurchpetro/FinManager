import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('@pages/dashboard/dashboard.module').then(
                (module: typeof import('@pages/dashboard/dashboard.module')) =>
                    module.DashboardModule
            ),
    },
    {
        path: 'calendar',
        loadChildren: () =>
            import('@pages/calendar/calendar.module').then(
                (module: typeof import('@pages/calendar/calendar.module')) =>
                    module.CalendarModule
            ),
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('@pages/settings/settings.module').then(
                (module: typeof import('@pages/settings/settings.module')) =>
                    module.SettingsModule
            ),
    },
    {
        path: 'statistic',
        loadChildren: () =>
            import('@pages/statistic/statistic.module').then(
                (module: typeof import('@pages/statistic/statistic.module')) =>
                    module.StatisticModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
