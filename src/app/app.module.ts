import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WelkomComponent} from "./welkom/welkom.component";
import {WelkomTabelComponent} from "./welkom/tabel/welkom-tabel.component";
import {WelkomFormComponent} from "./welkom/form/welkom-form.component";

@NgModule({
  declarations: [
    AppComponent,
    WelkomComponent,
    WelkomTabelComponent,
    WelkomFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
