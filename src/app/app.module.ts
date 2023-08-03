import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '@common/components';
import { RouterOutlet } from '@angular/router';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot(), LayoutModule, RouterOutlet],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
