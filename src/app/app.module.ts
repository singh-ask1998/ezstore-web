import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BASE_API_URL } from './tokens/BaseAPI.token';
import { EzStoreModule } from './ezstore/ezstore.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EzStoreModule
  ],
  providers: [{ provide: BASE_API_URL, useValue: environment.apiBaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
