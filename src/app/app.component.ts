import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService, PlatformService } from '@core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    public isWeb$: Observable<boolean>;
    public isLoggedIn$: Observable<boolean>;

    constructor(
        private readonly platformService: PlatformService,
        private readonly authService: AuthService
    ) {}

    public ngOnInit(): void {
        this.isWeb$ = this.platformService.isWeb$;
        this.isLoggedIn$ = this.authService.isLoggedIn$;
    }

    public onLogout(): void {
        this.authService.signOut();
    }
}
