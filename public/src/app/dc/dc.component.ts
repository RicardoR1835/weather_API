import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather = {};
  link = "https://cdn.pixabay.com/photo/2015/06/21/14/14/washington-monument-816642_960_720.jpg"

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    let observable = this._httpService.getDc();
    observable.subscribe(data => {
      this.weather = data;
      console.log(data['main']['temp']);
    })
  }

}
