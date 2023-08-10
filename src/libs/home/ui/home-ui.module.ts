import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { SignInComponent } from '@libs/home/ui/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '@libs/home/ui/register/register.component';
import { InfoComponent } from './info/info.component';

@NgModule({
    declarations: [SignInComponent, RegisterComponent, InfoComponent],
    imports: [CommonModule, IonicModule, ReactiveFormsModule],
    exports: [SignInComponent, RegisterComponent, InfoComponent],
})
export class HomeUiModule {}
