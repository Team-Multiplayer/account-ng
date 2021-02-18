import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LancamentoService } from 'src/app/service/lancamento/lancamento.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        transform: 'translateX(-100vw)'
      })),
      state('closed', style({
        transform: 'translateX(0)'
      })),
      transition('open => closed', [
        animate('1s 0ms ease-in-out')
      ]),
      transition('closed => open', [
        animate('0.9s 0ms ease-in-out')
      ]),
    ]),
  ],
})
export class TransferirComponent implements OnInit {
  isOpen: boolean = false;

  lancamentoForm = this.formBuilder.group({
    idContaUsuario:     ['', Validators.required],
    numeroContaDestino: ['', Validators.required],
    tipoContaDestino:   ['CORRENTE', Validators.required],
    descricao:          ['', Validators.required],
    valor:              ['', Validators.required],
    tipo:               ['TRANSFERENCIA'],
    categoria:          [1]
  })

  contaCorrente;
  contaCredito;

  constructor(
    private formBuilder: FormBuilder,
    private lancamentoService: LancamentoService
  ) { }

  ngOnInit(): void {
    this.contaCorrente = JSON.parse(localStorage.getItem('contaCorrente'));
    this.contaCredito = JSON.parse(localStorage.getItem('contaCredito'));
  }

  sendLancamento() {
    this.fazerTransferencia();
  }

  fazerTransferencia() {
    this.lancamentoService.novoLancamento(this.lancamentoForm.value)
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
      );
  }

  onSuccess(response) {
    this.toggle();
  }

  onError(error) {
    console.log(error);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  resetForm() {
    this.lancamentoForm.reset();
  }

}