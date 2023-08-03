import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { DiagramComponent } from '@libs/statistic/ui/diagram/diagram.component';

@NgModule({
    declarations: [DiagramComponent],
    imports: [CommonModule, IonicModule],
    exports: [DiagramComponent],
})
export class StatisticUiModule {}
