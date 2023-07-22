import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Observable, of } from 'rxjs';
import { PLATFORM_ENUM } from '../enums/platform.enum';

@Injectable({ providedIn: 'root' })
export class PlatformService {
    public isWeb$: Observable<boolean>;
    public isAndroid$: Observable<boolean>;
    public isIos$: Observable<boolean>;

    constructor() {
        this.isWeb$ = of(this.getPlatform() === PLATFORM_ENUM.WEB);
        this.isAndroid$ = of(this.getPlatform() === PLATFORM_ENUM.ANDROID);
        this.isIos$ = of(this.getPlatform() === PLATFORM_ENUM.IOS);
    }

    public getPlatform(): string {
        return Capacitor.getPlatform();
    }
}
