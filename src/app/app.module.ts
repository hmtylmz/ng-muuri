import { NgMuuriModule } from 'projects/ng-muuri/src/lib/ng-muuri.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMuuriModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
