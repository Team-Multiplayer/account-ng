import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/pages/area-auth/login/login.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.loginService.logar(this.loginForm.value)
    .subscribe(
      response => {
        if (response) {
          this.authService.setUsuario(response);
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }
}
