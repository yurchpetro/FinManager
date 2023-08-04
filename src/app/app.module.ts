import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '@common/components';
import { RouterOutlet } from '@angular/router';

import { environment } from '../environments/environment';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IonicModule.forRoot(),
        LayoutModule,
        RouterOutlet,
        AngularFireModule.initializeApp(environment.firebase),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAnalytics(() => getAnalytics()),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideFunctions(() => getFunctions()),
    ],
    providers: [ScreenTrackingService, UserTrackingService],
    bootstrap: [AppComponent],
})
export class AppModule {}
