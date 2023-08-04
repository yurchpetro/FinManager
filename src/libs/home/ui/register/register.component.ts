import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, ROUTES_ENUM } from '@core';
import { Router } from '@angular/router';
import { VALIDATION_PATTERNS } from '@common/constants';
import { RegisterModel } from '@libs/home/utils/models/register.model';
import { catchError, of, take } from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
    public form: FormGroup<RegisterModel>;

    constructor(
        private readonly fb: FormBuilder,
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    public ngOnInit(): void {
        this.form = this.fb.group<RegisterModel>({
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
            this.authService
                .signUpWithEmail(this.form.controls.email.value!, this.form.controls.password.value!)
                .pipe(
                    take(1),
                    catchError(err => {
                        console.log(err);
                        return of(null);
                    })
                )
                .subscribe((): void => {
                    void this.router.navigate([ROUTES_ENUM.DASHBOARD]);
                });
        }
    }
}
