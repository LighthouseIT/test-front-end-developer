import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../_service/expenses.service';
import { Chart } from 'angular-highcharts';
import { AmountService } from '../_service/amount.service';
import { MessengerService } from '../_service/messenger.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    expenses: any = {};
    amounts: any = {};
    expensesLoading = true;
    amountsLoading = true;
    chart: Chart;
    chartType: String;

    constructor(
        private expensesService: ExpensesService,
        private amountService: AmountService,
        private messengerService: MessengerService
    ) {
        this.messengerService.message.subscribe((val) => {
            this.drawChart(this.chartType);
        });
    }

    ngOnInit() {
        this.expensesService.obterExpenses()
            .then(res => this.expenses = res.json())
            .catch(err => console.log(err))
            .then(() => this.expensesLoading = false);
        this.drawChart('line');
    }

    drawChart(type) {
        this.chartType = type;
        this.amountService.getAmount()
            .then(res => this.amounts = res.json())
            .catch(err => console.log(err))
            .then(() => {
                const that = this;
                const data: any = [];
                this.amounts.days.forEach((el, idx) => {
                    data.push([el, this.amounts.values[idx]]);
                });
                this.chart = new Chart({
                    chart: {
                        type: type
                    },
                    credits: {
                        enabled: false
                    },
                    series: [
                        {
                            name: 'Valores',
                            data: data
                        }
                    ],
                    xAxis: {
                        labels: {
                            formatter: function() {
                                return that.amounts.days[this.value];
                            }
                        }
                    }
                });
            })
            .then(() => this.amountsLoading = false);
    }

}
