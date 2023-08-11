import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
    @Input({ transform: booleanAttribute }) public isWeb: boolean;
    @Input() public isLoggedIn: boolean;

    @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

    public onLogout(): void {
        this.logout.emit();
    }
}
