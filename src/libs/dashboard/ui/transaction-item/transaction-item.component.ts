import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
}
