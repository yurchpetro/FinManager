import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ModelStatus } from '@common/enums';
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
    public transactions$: Observable<TransactionModel[]>;
    public selectedTransaction: TransactionModel;
    public isModelOpen: boolean = false;
    public isEditMode: boolean = false;

    private readonly destroySource: Subject<void> = new Subject<void>();

    constructor(private readonly dashboardFeatureFacade: DashboardFeatureFacade) {}

    public ngOnInit(): void {
        this.dashboardFeatureFacade.load();
        this.transactions$ = this.dashboardFeatureFacade.transaction$;
        this.dashboardFeatureFacade.upsertLoading$
            .pipe(
                filter((status: ModelStatus): boolean => status === ModelStatus.Success),
                takeUntil(this.destroySource)
            )
            .subscribe(() => {
                this.onClose();
            });
    }

    public ngOnDestroy(): void {
        this.destroySource.next();
        this.destroySource.complete();
    }

    public onCreate(transaction: CreateTransactionModel): void {
        this.dashboardFeatureFacade.create(transaction);
    }

    public onEdit(transaction: TransactionModel): void {
        this.isEditMode = true;
        this.selectedTransaction = transaction;
        this.openModal();
    }

    public onUpdate(transaction: TransactionModel): void {
        this.dashboardFeatureFacade.update(transaction);
    }

    public onDelete(id: string): void {
        this.dashboardFeatureFacade.delete(id);
    }

    public openModal(): void {
        this.isModelOpen = true;
    }

    public onClose(): void {
        this.isEditMode = false;
        this.isModelOpen = false;
    }
}
