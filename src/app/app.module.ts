import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AuthLayoutModule } from "src/app/layouts/auth-layout/auth-layout.module";
import { AdminLayoutModule } from "src/app/layouts/admin-layout/admin-layout.module";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AuthLayoutModule,
    AdminLayoutModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
