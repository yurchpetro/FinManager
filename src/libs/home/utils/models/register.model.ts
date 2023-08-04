import { AbstractControl } from '@angular/forms';

export interface RegisterModel {
    email: AbstractControl<string | null>;
    password: AbstractControl<string | null>;
    repeatPassword: AbstractControl<string | null>;
}
