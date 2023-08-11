import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core';
import { Router } from '@angular/router';
import { VALIDATION_PATTERNS } from '@common/constants';
import { RegisterFormModel } from '@libs/home/utils/models/register-form.model';
import { SignInUpModel } from '@libs/home/utils/models/sign-in-up.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
    public form: FormGroup<RegisterFormModel>;

    @Output() public readonly signUp: EventEmitter<SignInUpModel> = new EventEmitter<SignInUpModel>();
    @Output() public readonly secondButton: EventEmitter<void> = new EventEmitter<void>();

    constructor(private readonly fb: FormBuilder) {}

    public ngOnInit(): void {
        this.form = this.fb.group<RegisterFormModel>({
            email: this.fb.control<string | null>(null, [
                Validators.required,
                Validators.pattern(VALIDATION_PATTERNS.EMAIL_PATTERN),
            ]),
            password: this.fb.control<string | null>(null, [Validators.required, Validators.min(6)]),
            repeatPassword: this.fb.control<string | null>(null, [Validators.required, Validators.min(6)]),
        });
    }

    public onRegister(): void {
        if (this.form.valid && this.form.controls.password.value === this.form.controls.repeatPassword.value) {
            this.signUp.emit({ email: this.form.controls.email.value!, password: this.form.controls.password.value! });
        }
    }

    public onSecond(): void {
        this.secondButton.emit();
    }
}
