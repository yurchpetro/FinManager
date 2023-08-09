import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { DiagramComponent } from './diagram/diagram.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsPanelComponent } from './charts-panel/charts-panel.component';

@NgModule({
    declarations: [DiagramComponent, ChartsComponent, ChartsPanelComponent],
    imports: [CommonModule, IonicModule],
    exports: [ChartsPanelComponent],
})
export class StatisticUiModule {}
