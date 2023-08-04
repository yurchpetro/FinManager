import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { SignInComponent } from '@libs/home/ui/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [SignInComponent],
    imports: [CommonModule, IonicModule, ReactiveFormsModule],
    exports: [SignInComponent],
})
export class HomeUiModule {}
