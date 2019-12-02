import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  inputs: [ 'nextDays' ,'currentCity']
})
export class CityDetailsComponent implements OnInit {
search = null
  constructor(appComponent : AppComponent) {
    appComponent.clearInput();
   this.search = appComponent.clearSearch
   }

   clearSearch (appComponent : AppComponent) {
    this.search()
   }

  ngOnInit() {
  }

}