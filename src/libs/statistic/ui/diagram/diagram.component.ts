import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart, ChartItem, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
    selector: 'app-diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagramComponent implements OnInit, OnChanges {
    @Input() public labels: string[];
    @Input() public backgroundColor: string[];
    @Input() public data: number[];
    @Input() public mounth: string;

    private chart: any;
    private placeholderData = {
        labels: ['Placeholder 1', 'Placeholder 2', 'Placeholder 3'],
        datasets: [
            {
                label: 'Placeholder',
                data: [300, 50, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                hoverOffset: 4,
            },
        ],
    };

    public ngOnInit(): void {
        this.createChart();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes && this.chart && this.data && this.labels && this.backgroundColor) {
            this.updateChart();
        }
    }

    private createChart(): void {
        const ctx: ChartItem = document.getElementById('myChart') as HTMLCanvasElement;
        this.chart = new Chart(ctx, {
            type: 'pie',
            data: this.placeholderData,
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });
    }

    private updateChart(): void {
        this.chart.data.labels = this.labels;
        this.chart.data.datasets[0].label = this.mounth;
        this.chart.data.datasets[0].data = this.data;
        this.chart.data.datasets[0].backgroundColor = this.backgroundColor;

        this.chart.update();
    }
}
