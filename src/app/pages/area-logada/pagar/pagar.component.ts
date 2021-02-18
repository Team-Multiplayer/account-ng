import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  lancamentoForm: FormGroup = this.formBuilder.group({
    idContaUsuario:     ['', Validators.required],
    descricao:          ['', Validators.required],
    valor:              ['', [Validators.required, Validators.min(0)]],
    tipo:               ['DEBITO'],
    categoria:          [1]
  })

  contaCorrente;
  contaCredito;
  erroLancamento = false;

  constructor(
    private formBuilder: FormBuilder,
    private lancamentoService: LancamentoService
  ) { }

  ngOnInit(): void {
    this.contaCorrente = JSON.parse(localStorage.getItem('contaCorrente'));
    this.contaCredito = JSON.parse(localStorage.getItem('contaCredito'));
  }

  sendLancamento() {

    if (!this.lancamentoForm.valid) {
      this.validarCamposDoFormulario(this.lancamentoForm);
      this.focarNoPrimeiroInputInvalido(this.lancamentoForm);
      return;
    }

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
    this.erroLancamento = true;
    console.log(error);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  resetForm() {
    this.lancamentoForm.reset();
  }

  private validarCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field) as FormControl;
      control.markAsTouched();
    });
  }

  private focarNoPrimeiroInputInvalido(form: FormGroup) {
    for (let control of Object.keys(form.controls)) {
      if (form.controls[control].invalid) {
        const input = `${control}Input` as keyof PagarComponent;
        (this[input] as ElementRef).nativeElement.focus();
        break;
      }
    }
  }

  exibeErro(nomeControle: string) {
    if (!this.lancamentoForm.controls[nomeControle]) {
      return false;
    }
    return this.lancamentoForm.controls[nomeControle].invalid && this.lancamentoForm.controls[nomeControle].touched;
  }

}
