import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  query: string;
  cities: object;
  currentCity: any;
  nextDays: any;
  data : any;


  constructor(private http: HttpClient) {
    this.query = '';
  }

  showCity(item) {
    let apiUrl = `
    https://api.openweathermap.org//data/2.5/forecast?id=${item.id}&appid=4d725b2f41f2c98eca468ee939737fcb
    `

    this.http.get<object>(apiUrl).subscribe(data => {
      this.data = data
    })
    let data = this.data
    console.log(data)
    this.nextDays = this.data.list.filter(i =>  i.dt_txt.slice(11, 13) == "12" );
    this.currentCity = this.data.city
    console.log( this.currentCity, "gdfgd", this.nextDays)

    // for ( let i of this.nextDays){
    //   console.log(i)
    // }
    // this.query = item.name;
    this.query = undefined;
    item.highlight = !item.highlight;
  }


  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe(data => {
      console.log(data)
      this.cities = data;
    })
  }

}