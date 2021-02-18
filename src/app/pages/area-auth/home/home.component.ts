import { Component, HostListener, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/animations/animation';
import * as Aos from 'aos';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class HomeComponent implements OnInit {

  showTopBtn: boolean;

  constructor() { }

  ngOnInit(): void {
    Aos.refresh();
  }

  @HostListener('window:scroll', ['$event'])
    showButtonScrollTop() {
      if (window.pageYOffset > 800) {
        this.showTopBtn = true;
      } else {
        this.showTopBtn = false;
      }
    }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }
}
