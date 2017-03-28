import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//import './core/rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavComponent } from './shared/nav/nav.component';
import { PageNotFoundComponent } from './404.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,

    // LoginModule,
    // Routes get loaded in order. It is important that login
    // come before AppRoutingModule, as
    // AppRoutingModule defines the catch-all ** route
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }