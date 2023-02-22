import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowIpComponent } from './show-ip/show-ip.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CityFormComponent } from './city-form/city-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowIpComponent,
    ShowWeatherComponent,
    CityFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
