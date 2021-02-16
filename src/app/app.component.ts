import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import * as Aos from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
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


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
