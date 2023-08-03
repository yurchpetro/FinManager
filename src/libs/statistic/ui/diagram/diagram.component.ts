import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Chart, ChartItem, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
    selector: 'app-diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagramComponent implements OnInit {
    private chart: any;

    public ngOnInit(): void {
        this.createChart();
    }

    createChart(): void {
        const ctx: ChartItem = document.getElementById('myChart') as HTMLCanvasElement;
        this.chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Label 1', 'Label 2', 'Label 3'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [300, 50, 100],
                        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                        hoverOffset: 4,
                    },
                ],
            },
            options: {
                // Chart options and configurations go here
            },
        });
    }
}
