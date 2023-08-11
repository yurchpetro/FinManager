import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '@pages/home/home.component';
import { HomeRoutingModule } from '@pages/home/home-routing.module';
import { HomeUiModule } from '@libs/home/ui/home-ui.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule, HomeUiModule, IonicModule],
    providers: [],
})
export class HomeModule {}
