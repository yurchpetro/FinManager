import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '@pages/calendar/calendar.component';

const routes: Routes = [
    {
        component: CalendarComponent,
        path: '',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CalendarRoutingModule {}
