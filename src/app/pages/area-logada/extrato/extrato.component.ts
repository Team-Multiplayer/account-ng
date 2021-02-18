import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs/operators';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  // public chartType: string = 'pie';

  // public chartDatasets: Array<any> = [
  //   { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  // ];

  // public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  // public chartColors: Array<any> = [
  //   {
  //     backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
  //     hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
  //     borderWidth: 2,
  //   }
  // ];

  // public chartOptions: any = {
  //   responsive: true
  // };



  erro = false;
  estaCarregando = false;
  contaCorrente;
  contaCredito;

  cardColor: string = 'black';

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private extratoService: ExtratoService,
    ) {

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    this.buscarExtrato();
  }

  buscarExtrato() {

    this.estaCarregando = true

    const inicio: string = this.fromDate.year.toString() + '-' + this.fromDate.month.toString().padStart(2, '0') + '-' +this.fromDate.day.toString().padStart(2, '0');
    const fim: string = this.toDate.year.toString() + '-' + this.toDate.month.toString().padStart(2, '0') + '-' +this.toDate.day.toString().padStart(2, '0');

    this.extratoService.getExtrato(inicio, fim)
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
    console.log('error: ' + JSON.stringify(error) );
  }

  onSuccess(response: any) {
    this.contaCorrente = response.contaCorrente;
    this.contaCredito = response.contaCredito;
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    //existindo as duas datas dentro das variáveis, ativa a requisição no endpoint.
    if (this.fromDate && this.toDate) {
      this.buscarExtrato();
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }


  changeCard(color: string) {
    this.cardColor = color;
  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
