import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    public isSignIn: boolean = false;
    public isSignUp: boolean = false;

    public onLogin(): void {
        this.isSignIn = !this.isSignIn;
        this.isSignUp = false;
    }

    public onRegister(): void {
        this.isSignUp = !this.isSignUp;
        this.isSignIn = false;
    }
}
