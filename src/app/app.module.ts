import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WelkomComponent} from "./welkom/welkom.component";
import {WelkomViewComponent} from "./welkom/welkom-view.component";

@NgModule({
  declarations: [
    AppComponent,
    WelkomComponent,
    WelkomViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
