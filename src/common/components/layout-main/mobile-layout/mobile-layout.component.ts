import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTES_ENUM } from '@core';

@Component({
    selector: 'app-mobile-layout',
    templateUrl: './mobile-layout.component.html',
    styleUrls: ['./mobile-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileLayoutComponent {
    public readonly ROUTES_ENUM: typeof ROUTES_ENUM = ROUTES_ENUM;
}
