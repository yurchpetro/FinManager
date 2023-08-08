import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SummaryModel } from '@libs/calendar/utils/models/calendar-item.model';

@Component({
    selector: 'app-mounth-summary',
    templateUrl: './mounth-summary.component.html',
    styleUrls: ['./mounth-summary.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MounthSummaryComponent {
    @Input() public summary: SummaryModel;
}
