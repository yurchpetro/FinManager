import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignInUpModel } from '@libs/home/utils/models/sign-in-up.model';
import { catchError, of, take } from 'rxjs';
import { AuthService, ROUTES_ENUM } from '@core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    public isSignIn: boolean = false;
    public isSignUp: boolean = false;

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    public onSignUp(cred: SignInUpModel): void {
        this.authService
            .signUpWithEmail(cred.email, cred.password)
            .pipe(
                take(1),
                catchError(() => {
                    return of(null);
                })
            )
            .subscribe((): void => {
                void this.router.navigate([ROUTES_ENUM.DASHBOARD]);
            });
    }

    public onSignIn(cred: SignInUpModel): void {
        this.authService
            .signInWithEmail(cred.email, cred.password)
            .pipe(
                take(1),
                catchError(() => {
                    return of(null);
                })
            )
            .subscribe((): void => {
                void this.router.navigate([ROUTES_ENUM.DASHBOARD]);
            });
    }

    public onLogin(): void {
        this.isSignIn = !this.isSignIn;
        this.isSignUp = false;
    }

    public onRegister(): void {
        this.isSignUp = !this.isSignUp;
        this.isSignIn = false;
    }
}
