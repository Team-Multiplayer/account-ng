import { Component, OnInit } from "@angular/core";
import * as Aos from "aos";

@Component({
  selector: "app-root",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {

  ngOnInit() {
    Aos.init({
      offset: 50,
      easing: 'ease',
      duration: 1500,
      once: true,
      delay: 0,
    });
  }

}
