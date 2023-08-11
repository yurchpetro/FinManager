import { AbstractControl } from '@angular/forms';

export interface SignInFormModel {
    email: AbstractControl<string | null>;
    password: AbstractControl<string | null>;
}
