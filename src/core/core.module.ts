import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicAccessGuard } from './services/public-access.guard';
import { UserAccessGuard } from './services/user-access.guard';
import { InitUserService } from './services/init-user.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
    imports: [CommonModule],
    providers: [PublicAccessGuard, UserAccessGuard, InitUserService, LocalStorageService],
})
export class CoreModule {}
