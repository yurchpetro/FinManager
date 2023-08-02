import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-horizontal-select',
    templateUrl: './horizontal-select.component.html',
    styleUrls: ['./horizontal-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class HorizontalSelectComponent {
    @Input() public title: string;
    @Output() public readonly left: EventEmitter<void> = new EventEmitter<void>();
    @Output() public readonly right: EventEmitter<void> = new EventEmitter<void>();

    public onLeft(): void {
        this.left.emit();
    }
    public onRight(): void {
        this.right.emit();
    }
}
