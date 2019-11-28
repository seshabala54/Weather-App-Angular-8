import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityItemsComponent } from './city-items/city';
import { SearchCitiesPipe } from './search-cities.pipe';
import { CityDetailsComponent } from './city-details/city';


@NgModule({
  declarations: [
    AppComponent,
    CityItemsComponent,
    SearchCitiesPipe,
    CityDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }