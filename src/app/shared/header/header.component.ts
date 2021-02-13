import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bodyColorWhite: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('white-content')) {
      this.bodyColorWhite = true;
    }
  }

}
