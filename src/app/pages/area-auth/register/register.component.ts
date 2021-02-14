import Typewriter from 'typewriter-effect/dist/core';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/pages/area-auth/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
        cpf: ['', Validators.required],
    nome: ['', Validators.required],
    login: ['', Validators.required],
    senha: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
    ) { }

  ngOnInit(): void {
    var target = document.getElementById('typed');

    var typewriter = new Typewriter(target, {
      loop: false,
      delay: 35,
      deleteSpeed: 20
    });

    typewriter
      .pauseFor(1000)
      .typeString('Prepare-se para ver seu dinheiro rendendo ')
      .pauseFor(500)
      .typeString('<strong>mais</strong> que a poupança.')
      .pauseFor(500)
      .deleteChars(20)
      .pauseFor(500)
      .typeString('24h 7 dias na semana.')
      .pauseFor(500)
      .deleteChars(21)
      .typeString('com toda segurança.')
      .pauseFor(500)
      .deleteChars(19)
      .typeString('com todo conforto.')
      .pauseFor(500)
      .deleteChars(18)
      .pauseFor(500)
      .typeString('bem aí na palma da sua mão.')
      .start();
    }





  registerUser() {
    this.registerService.cadastrar(this.registerForm.value).subscribe(response => {console.log(response)});
  }
}
