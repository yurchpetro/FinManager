import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VALIDATION_PATTERNS } from '@common/constants';
import { SignInFormModel } from '@libs/home/utils/models/sign-in-form.model';
import { AuthService, ROUTES_ENUM } from '@core';
import { catchError, of, take } from 'rxjs';
import { Router } from '@angular/router';
import { SignInUpModel } from '@libs/home/utils/models/sign-in-up.model';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
    public form: FormGroup<SignInFormModel>;

    @Output() public readonly signIn: EventEmitter<SignInUpModel> = new EventEmitter<SignInUpModel>();
    @Output() public readonly secondButton: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private readonly fb: FormBuilder,
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    public ngOnInit(): void {
        this.form = this.fb.group<SignInFormModel>({
            email: this.fb.control<string | null>(null, [
                Validators.required,
                Validators.pattern(VALIDATION_PATTERNS.EMAIL_PATTERN),
            ]),
            password: this.fb.control<string | null>(null, [Validators.required, Validators.min(6)]),
        });
    }

    public onSubmit(): void {
        if (this.form.valid) {
            this.signIn.emit({ email: this.form.controls.email.value!, password: this.form.controls.password.value! });
        }
    }

    public onSecond(): void {
        this.secondButton.emit();
    }
}
