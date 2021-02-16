import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {

  formUser: FormGroup = this.formBuilder.group({
    cpf: ['', Validators.required],
    login: ['', Validators.required],
    nome: ['', Validators.required],
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

// Provavelmente esté component será deletado.
  ngOnInit() {}
}
