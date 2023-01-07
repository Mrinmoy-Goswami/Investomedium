import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BeginnerComponent } from './beginner/beginner.component';
import { AboutComponent } from './about/about.component';
import { TradingCornerComponent } from './trading-corner/trading-corner.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    BeginnerComponent,
    AboutComponent,
    TradingCornerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
