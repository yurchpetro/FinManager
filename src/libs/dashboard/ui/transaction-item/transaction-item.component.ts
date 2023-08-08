import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryModel, TransactionModel } from '@common/models';
import { ExpenseCategoryConst } from '../../../../common/constants/expense-category.const';
import { IncomeCategoryConst } from '@common/constants';

@Component({
    selector: 'app-transaction-item',
    templateUrl: './transaction-item.component.html',
    styleUrls: ['./transaction-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionItemComponent implements OnInit {
    @Input() public isWeb: boolean;
    @Input() public transaction: TransactionModel;
    @Output() public edit: EventEmitter<TransactionModel> = new EventEmitter<TransactionModel>();

    @Output() public delete: EventEmitter<string> = new EventEmitter<string>();

    public icon: CategoryModel;
    public readonly defaultIcon: CategoryModel = {
        color: '#151581',
        icon: 'ban-outline',
        name: '',
    };
    public readonly expenseCategoryConst: CategoryModel[] = ExpenseCategoryConst;
    public readonly incomeCategoryConst: CategoryModel[] = IncomeCategoryConst;

    public ngOnInit(): void {
        this.selectIcon([...this.expenseCategoryConst, ...this.incomeCategoryConst]);
    }

    public onEdit(): void {
        this.edit.emit(this.transaction);
    }

    public onDelete(): void {
        this.delete.emit(this.transaction.id);
    }

    public selectIcon(items: CategoryModel[]): void {
        this.icon =
            items.find((item: CategoryModel): boolean => item.name === this.transaction.category) ?? this.defaultIcon;
    }
}
