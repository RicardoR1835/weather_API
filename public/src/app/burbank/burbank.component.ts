import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather = {};
  link = "https://ssl.cdn-redfin.com/photo/45/mbpaddedwide/370/genMid.BB15213370_0.jpg";

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    let observable = this._httpService.getBurbank();
    observable.subscribe(data => {
      this.weather = data;
      console.log(data['main']['temp']);
    })
  }

}
