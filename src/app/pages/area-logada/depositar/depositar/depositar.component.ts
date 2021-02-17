import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LancamentoService } from 'src/app/service/lancamento/lancamento.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.scss'],
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
export class DepositarComponent implements OnInit {

  isOpen: boolean = false;

  userId = JSON.parse(localStorage.getItem('usuario'));
  lancamentoForm = this.formBuilder.group({
    idContaUsuario:     ['', Validators.required],
    descricao:          ['', Validators.required],
    categoria:          ['', Validators.required],
    valor:              ['', Validators.required],
    tipo:               ['', Validators.required],
  })


  constructor(
    private formBuilder: FormBuilder,
    private lancamentoService: LancamentoService

  ) { }

  ngOnInit(): void {

    this.isOpen = false;

  }

  fazerDeposito() {

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
