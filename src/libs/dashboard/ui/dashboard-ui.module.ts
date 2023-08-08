import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { IonicModule } from '@ionic/angular';
import { DatepickerComponent, IconComponent } from '@common/components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [TransactionItemComponent, CreateEditFormComponent],
    imports: [CommonModule, IonicModule, ReactiveFormsModule, DatepickerComponent, IconComponent],
    providers: [],
    exports: [TransactionItemComponent, CreateEditFormComponent],
})
export class DashboardUiModule {}
