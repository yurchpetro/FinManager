import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTES_ENUM } from '@core';

@Component({
    selector: 'app-web-layout',
    templateUrl: './web-layout.component.html',
    styleUrls: ['./web-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebLayoutComponent {
    public readonly ROUTES_ENUM: typeof ROUTES_ENUM = ROUTES_ENUM;
}
