import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LancamentoService } from 'src/app/service/lancamento/lancamento.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.scss'],
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
export class PagarComponent implements OnInit {

  isOpen: boolean = false;

  lancamentoForm = this.formBuilder.group({
    idContaUsuario:     ['', Validators.required],
    descricao:          ['', Validators.required],
    valor:              ['', Validators.required],
    tipo:               ['DEBITO', Validators.required],
    categoria:          [1]
  })


  constructor(
    private formBuilder: FormBuilder,
    private lancamentoService: LancamentoService
  ) { }

  ngOnInit(): void {

  }

  sendLancamento() {
    this.lancamentoService.pagarService(this.lancamentoForm.value)
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
      );
  }

  onSuccess(response) {
    this.toggle();
    console.log(response);
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
