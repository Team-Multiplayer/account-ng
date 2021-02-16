import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;

  bodyColorWhite: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    let body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('white-content')) {
      this.bodyColorWhite = true;
    }

    if (this.authService.getToken()) {
      this.isLogged = true;
    }
  }
}
