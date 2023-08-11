import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ROUTES_ENUM } from '@core';

@Component({
    selector: 'app-web-layout',
    templateUrl: './web-layout.component.html',
    styleUrls: ['./web-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebLayoutComponent {
    @Input() public isLoggedIn: boolean;
    @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

    public readonly ROUTES_ENUM: typeof ROUTES_ENUM = ROUTES_ENUM;

    public onLogout(): void {
        this.logout.emit();
    }
}
