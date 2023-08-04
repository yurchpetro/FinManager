import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicAccessGuard } from './services/public-access.guard';
import { UserAccessGuard } from './services/user-access.guard';

@NgModule({
    imports: [CommonModule],
    providers: [PublicAccessGuard, UserAccessGuard],
})
export class CoreModule {}
