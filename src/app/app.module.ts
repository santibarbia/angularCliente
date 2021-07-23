import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BodyComponent } from './component/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
