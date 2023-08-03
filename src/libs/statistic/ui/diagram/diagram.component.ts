import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagramComponent {}
