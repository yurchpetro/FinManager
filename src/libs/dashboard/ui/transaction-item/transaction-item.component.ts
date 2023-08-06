import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TransactionModel } from '@common/models';

@Component({
    selector: 'app-transaction-item',
    templateUrl: './transaction-item.component.html',
    styleUrls: ['./transaction-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionItemComponent {
    @Input() public isWeb: boolean;
    @Input() public transaction: TransactionModel;

    @Output() public edit: EventEmitter<TransactionModel> = new EventEmitter<TransactionModel>();
    @Output() public delete: EventEmitter<string> = new EventEmitter<string>();

    public onEdit(): void {
        this.edit.emit(this.transaction);
    }

    public onDelete(): void {
        this.delete.emit(this.transaction.id);
    }
}
