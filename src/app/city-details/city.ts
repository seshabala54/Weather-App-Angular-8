import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  inputs: [ 'nextDays' ,'currentCity']
})
export class CityDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}