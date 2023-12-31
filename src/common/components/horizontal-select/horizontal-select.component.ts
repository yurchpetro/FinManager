import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-horizontal-select',
    templateUrl: './horizontal-select.component.html',
    styleUrls: ['./horizontal-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [IonicModule, DatePipe],
})
export class HorizontalSelectComponent {
    @Input() public title: string | number;
    @Input() public dateFormat: string;
    @Output() public readonly left: EventEmitter<void> = new EventEmitter<void>();
    @Output() public readonly right: EventEmitter<void> = new EventEmitter<void>();

    public onLeft(): void {
        this.left.emit();
    }
    public onRight(): void {
        this.right.emit();
    }
}
