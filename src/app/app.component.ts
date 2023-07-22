import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PlatformService } from '@core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    public isWeb$: Observable<boolean>;

    constructor(private readonly platformService: PlatformService) {}

    public ngOnInit(): void {
        this.isWeb$ = this.platformService.isWeb$;
    }
}
