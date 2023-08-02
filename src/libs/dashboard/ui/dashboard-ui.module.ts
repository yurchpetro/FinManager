import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [TransactionItemComponent],
    imports: [CommonModule, IonicModule],
    exports: [TransactionItemComponent],
})
export class DashboardUiModule {}
