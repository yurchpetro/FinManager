import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MobileLayoutComponent } from './mobile-layout/mobile-layout.component';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { AngularMaterialsModule } from '../angular-materials.module';

@NgModule({
    declarations: [LayoutComponent, MobileLayoutComponent, WebLayoutComponent],
    imports: [CommonModule, RouterLink, IonicModule, AngularMaterialsModule, RouterLinkActive],
    providers: [],
    exports: [LayoutComponent],
})
export class LayoutModule {}
