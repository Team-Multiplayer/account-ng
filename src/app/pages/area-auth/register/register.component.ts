import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/pages/area-auth/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
    ) { }

  ngOnInit(): void {
  }

  registerForm = this.formBuilder.group({
    cpf: ['', Validators.required],
    nome: ['', Validators.required],
    login: ['', Validators.required],
    senha: ['', Validators.required]
  })



  registerUser() {
    this.registerService.cadastrar(this.registerForm.value).subscribe(response => {console.log(response)});
  }
}
