import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
// import { fromEvent } from 'rxjs/add/observable';
// import { debounceTime, map, switchMap, distinctUntilChanged, do as doo, from ,filter } from 'rxjs/add/operator';




@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css'],
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
  data: any;



  constructor(private http: HttpClient) {
    this.query = '';
  }
  searchSubject$ = new Subject<string>();
  // results$: Observable<any>;

  // ngOnInit() { 

  // }

  clearSearch() {
    this.currentCity = undefined
    this.nextDays = undefined
    this.data = undefined
    console.log(this.currentCity, this.nextDays, this.data)
  }

  clearInput() {
    this.query = ''

  }

  queryAPI() {
    this.http.get<object>(`
  https://api.openweathermap.org//data/2.5/forecast?q=${this.searchSubject$}&appid=4d725b2f41f2c98eca468ee939737fcb
  `).subscribe(result => {
      this.data = result
    })
    // let data = this.data
    this.nextDays = this.data.list.filter(i => i.dt_txt.slice(11, 13) == "12");
    this.currentCity = this.data.city
  }

  showCity(item) {
    let apiUrl = `
    https://api.openweathermap.org//data/2.5/forecast?id=${item.id}&appid=4d725b2f41f2c98eca468ee939737fcb
    `

    this.http.get<object>(apiUrl).subscribe(data => {
      this.data = data
    })
    let data = this.data
    // console.log(data)
    this.nextDays = this.data.list.filter(i => i.dt_txt.slice(11, 13) == "12");
    this.currentCity = this.data.city
    // console.log(this.currentCity, "gdfgd", this.nextDays)
    this.query = '';
    item.highlight = !item.highlight;
  }


  ngOnInit(): void {
    // const data = from(fetch('../assets/data.json'));
    // console.log(data)
    this.http.get<Object>('../assets/data.json').subscribe(data => {
      this.cities = data;
    })
    // this.results$ = this.searchSubject$
    // .debounceTime(200)
    // .distinctUntilChanged()
    // .do(x => console.log('do', x))
    // .switchMap(searchString => this.queryAPI(searchString))
  }

  inputChanged($event) {
    console.log('input changed', $event);
    this.searchSubject$ = $event;
  }

}