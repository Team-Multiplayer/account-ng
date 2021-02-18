import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { slideInAnimation } from 'src/app/shared/animations/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.refresh();


  }

}
