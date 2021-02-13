import { Component, OnInit } from "@angular/core";
import * as Aos from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
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
