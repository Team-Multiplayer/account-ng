import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  contaCorrente = {
    conta: {},
    lancamentos: []
  };

  contaCredito = {
    conta: {},
    lancamentos: []
  };

  constructor(
    private dashboardService: DashboardService,
  ) {}

  ngOnInit() {

    this.dashboardService.buscarDadosDashboard()
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
    );


  }

  onError(error: any) {
    console.log('error: ' + error );

  }

  onSuccess(response: any) {
    console.log(response);
    this.contaCorrente = response.contaCorrente;
    console.log(this.contaCorrente.lancamentos.length);

    this.contaCredito = response.contaCredito;

  }
;
}

