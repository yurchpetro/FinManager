import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTransformModel } from './temp/create-transform.model';
import { ModelStatus, TransactionType } from '@common/enums';
import { DashboardFeatureFacade } from '@libs/dashboard/data-access/store/dashboard-feature.facade';
import { CreateTransactionModel, TransactionModel } from '@common/models';
import { filter, Observable, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
    public form: FormGroup<CreateTransformModel>;
    public transactions$: Observable<TransactionModel[]>;
    public selectedTransaction: TransactionModel;

    private readonly destroySource: Subject<void> = new Subject<void>();

    constructor(
        private readonly dashboardFeatureFacade: DashboardFeatureFacade,
        private readonly fb: FormBuilder
    ) {}

    public ngOnInit(): void {
        this.dashboardFeatureFacade.load();
        this.transactions$ = this.dashboardFeatureFacade.transaction$;
        this.dashboardFeatureFacade.upsertLoading$
            .pipe(
                filter((status: ModelStatus): boolean => status === ModelStatus.Success),
                takeUntil(this.destroySource)
            )
            .subscribe(() => {
                this.form.reset();
            });

        this.form = this.fb.group<CreateTransformModel>({
            name: this.fb.control<string | null>(null, [Validators.required]),
            description: this.fb.control<string | null>(null),
            category: this.fb.control<string | null>(null),
            amount: this.fb.control<number | null>(null),
            date: this.fb.control<Date | null>(null),
            wallet: this.fb.control<string | null>(null),
            type: this.fb.control<TransactionType | null>(null),
        });
    }

    public ngOnDestroy(): void {
        this.destroySource.next();
        this.destroySource.complete();
    }

    public onCreate(): void {
        const transaction: CreateTransactionModel = {
            name: this.form.controls.name.value!,
            description: this.form.controls.description.value!,
            amount: this.form.controls.amount.value!,
            category: this.form.controls.category.value!,
            wallet: this.form.controls.wallet.value!,
            date: this.form.controls.date.value!,
            type: this.form.controls.type.value!,
        };

        this.dashboardFeatureFacade.create(transaction);
    }

    public onEdit(transaction: TransactionModel): void {
        this.form.patchValue(transaction);
        this.selectedTransaction = transaction;
    }

    public onUpdate(): void {
        const transaction: CreateTransactionModel = {
            name: this.form.controls.name.value!,
            description: this.form.controls.description.value!,
            amount: this.form.controls.amount.value!,
            category: this.form.controls.category.value!,
            wallet: this.form.controls.wallet.value!,
            date: this.form.controls.date.value!,
            type: this.form.controls.type.value!,
        };

        this.dashboardFeatureFacade.update({ ...transaction, id: this.selectedTransaction.id });
    }

    public onDelete(id: string): void {
        this.dashboardFeatureFacade.delete(id);
    }
}
