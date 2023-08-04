import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicAccessGuard, UserAccessGuard } from '@core';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'home',
        canActivate: [PublicAccessGuard],
        loadChildren: () =>
            import('@pages/home/home.module').then(
                (module: typeof import('@pages/home/home.module')) => module.HomeModule
            ),
    },
    {
        path: 'dashboard',
        canActivate: [UserAccessGuard],
        loadChildren: () =>
            import('@pages/dashboard/dashboard.module').then(
                (module: typeof import('@pages/dashboard/dashboard.module')) => module.DashboardModule
            ),
    },
    {
        path: 'calendar',
        canActivate: [UserAccessGuard],
        loadChildren: () =>
            import('@pages/calendar/calendar.module').then(
                (module: typeof import('@pages/calendar/calendar.module')) => module.CalendarModule
            ),
    },
    {
        path: 'settings',
        canActivate: [UserAccessGuard],
        loadChildren: () =>
            import('@pages/settings/settings.module').then(
                (module: typeof import('@pages/settings/settings.module')) => module.SettingsModule
            ),
    },
    {
        path: 'statistic',
        canActivate: [UserAccessGuard],
        loadChildren: () =>
            import('@pages/statistic/statistic.module').then(
                (module: typeof import('@pages/statistic/statistic.module')) => module.StatisticModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
