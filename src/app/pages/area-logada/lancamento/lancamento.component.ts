import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.scss'],
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
export class LancamentoComponent implements OnInit {
  isOpen: boolean = false;

  lancamentoForm = this.formBuilder.group({
    numeroContaUsuario: ['', Validators.required],
    numeroContaDestino: ['', Validators.required],
    descricao:          ['', Validators.required],
    categoria:          ['', Validators.required],
    valor:              ['', Validators.required],
    tipo:               ['', Validators.required]
  })


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  sendLancamento() {
    console.log('ok');
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  resetForm() {
    this.lancamentoForm.reset();
  }

}
