import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTransformModel } from '@libs/dashboard/utils/models/create-transform.model';
import { TRANSACTION_TYPE_ENUM, TransactionType } from '@common/enums';
import { CategoryModel, CreateTransactionModel, TransactionModel } from '@common/models';
import { IncomeCategoryConst, ExpenseCategoryConst } from '@common/constants';

@Component({
    selector: 'app-create-edit-form',
    templateUrl: './create-edit-form.component.html',
    styleUrls: ['./create-edit-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEditFormComponent implements OnInit, OnChanges {
    public form: FormGroup<CreateTransformModel>;
    @Input() public isEditMode: boolean = false;
    @Input() public selectedTransaction: TransactionModel;

    @Output() public edit: EventEmitter<TransactionModel> = new EventEmitter<TransactionModel>();
    @Output() public create: EventEmitter<CreateTransactionModel> = new EventEmitter<CreateTransactionModel>();
    @Output() public closeModal: EventEmitter<void> = new EventEmitter<void>();

    public readonly incomeCategoryConst: CategoryModel[] = IncomeCategoryConst;
    public readonly expenseCategoryConst: CategoryModel[] = ExpenseCategoryConst;
    public readonly TRANSACTION_TYPE_ENUM: typeof TRANSACTION_TYPE_ENUM = TRANSACTION_TYPE_ENUM;

    constructor(private readonly fb: FormBuilder) {}

    public ngOnInit(): void {
        this.form = this.fb.group<CreateTransformModel>({
            name: this.fb.control<string | null>(null, [Validators.required]),
            description: this.fb.control<string | null>(null),
            category: this.fb.control<string | null>(null, Validators.required),
            amount: this.fb.control<number | null>(null, Validators.required),
            date: this.fb.control<number | null>(null, Validators.required),
            wallet: this.fb.control<string | null>(null),
            type: this.fb.control<TransactionType | null>(null, Validators.required),
        });

        if (this.selectedTransaction && this.isEditMode) {
            this.form.patchValue(this.selectedTransaction);
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes && this.selectedTransaction && this.isEditMode && this.form) {
            this.form.patchValue(this.selectedTransaction);
        }
    }

    public onSubmit(): void {
        const transaction: CreateTransactionModel = {
            name: this.form.controls.name.value!,
            description: this.form.controls.description.value!,
            amount: this.form.controls.amount.value!,
            category: this.form.controls.category.value!,
            wallet: this.form.controls.wallet.value!,
            date: this.form.controls.date.value!,
            type: this.form.controls.type.value!,
        };

        if (this.form.controls.type.value === this.TRANSACTION_TYPE_ENUM.TRANSACTION) {
            transaction.category = 'transaction';
        }

        if (this.isEditMode) {
            this.edit.emit({ ...transaction, id: this.selectedTransaction.id });
        } else {
            this.create.emit(transaction);
        }
    }

    public onClose(): void {
        this.closeModal.emit();
    }
}
