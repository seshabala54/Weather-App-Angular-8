import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-items',
  templateUrl: './city-items.component.html',
  inputs: ['city']
})
export class CityItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}