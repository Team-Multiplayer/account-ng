import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/animations/animation';
import * as Aos from 'aos';

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
