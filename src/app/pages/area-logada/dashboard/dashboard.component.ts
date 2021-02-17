import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { finalize } from "rxjs/operators";
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

  contaCorrente;
  contaCredito;

  erro = false;
  estaCarregando = true;

  constructor(
    private dashboardService: DashboardService,
  ) {}

  ngOnInit() {

    this.dashboardService.buscarDadosDashboard()
    .pipe(
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
    );

  }

  onError(error: any) {
    this.erro = true;
    console.log('error: ' + error );
  }

  onSuccess(response: any) {

    console.log('response: ' + response);

    this.contaCorrente = response.contaCorrente;
    this.contaCredito = response.contaCredito;

  }
;


}

