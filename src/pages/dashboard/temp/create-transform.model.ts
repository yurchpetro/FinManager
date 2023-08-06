import { AbstractControl } from '@angular/forms';
import { TransactionType } from '@common/enums';

export interface CreateTransformModel {
    name: AbstractControl<string | null>;
    description: AbstractControl<string | null>;
    category: AbstractControl<string | null>;
    amount: AbstractControl<number | null>;
    date: AbstractControl<Date | null>;
    wallet: AbstractControl<string | null>;
    type: AbstractControl<TransactionType | null>;
}
