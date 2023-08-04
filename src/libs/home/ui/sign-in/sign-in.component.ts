import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VALIDATION_PATTERNS } from '@common/constants';
import { SignInModel } from '@libs/home/utils/models/sign-in.model';
import { AuthService, ROUTES_ENUM } from '@core';
import { catchError, of, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
    public form: FormGroup<SignInModel>;

    constructor(
        private readonly fb: FormBuilder,
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    public ngOnInit(): void {
        this.form = this.fb.group<SignInModel>({
            email: this.fb.control<string | null>(null, [
                Validators.required,
                Validators.pattern(VALIDATION_PATTERNS.EMAIL_PATTERN),
            ]),
            password: this.fb.control<string | null>(null, [Validators.required, Validators.min(6)]),
        });
    }

    public onSubmit(): void {
        if (this.form.valid) {
            this.authService
                .signInWithEmail(this.form.controls.email.value!, this.form.controls.password.value!)
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
