import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import localePT from '@angular/common/locales/pt';

import { AppRoutingModule } from "./app-routing.module";
import { AuthLayoutModule } from "src/app/layouts/auth-layout/auth-layout.module";
import { AdminLayoutModule } from "src/app/layouts/admin-layout/admin-layout.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { registerLocaleData } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AboutComponent } from './pages/area-auth/about/about/about.component';

registerLocaleData(localePT, 'pt');

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthLayoutModule,
    AdminLayoutModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }, {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
