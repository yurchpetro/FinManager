import { AbstractControl } from '@angular/forms';

export interface SignInModel {
    email: AbstractControl<string | null>;
    password: AbstractControl<string | null>;
}
