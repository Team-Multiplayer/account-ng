import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeFooterComponent } from "./footer/home-footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [HomeFooterComponent, HeaderComponent],
  exports: [HomeFooterComponent, HeaderComponent]
})

export class SharedModule {}
