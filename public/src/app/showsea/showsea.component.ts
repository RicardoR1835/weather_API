import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-showsea',
  templateUrl: './showsea.component.html',
  styleUrls: ['./showsea.component.css']
})
export class ShowseaComponent implements OnInit {
  weather = {};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params)
    });

    this.getWeather();

  }

  
  getWeather(){
    let observable = this._httpService.getSeattle();
    observable.subscribe(data => {
      this.weather = data;
      console.log(data['main']['temp']);
    })
  }
}


// let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/6/');
// pokemon.subscribe(data => {
//   console.log(`${data.name} is my favorite pokemon! Here are some of his abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}. He is also a ${data.types[0].type.name} and ${data.types[1].type.name} type pokemon!`)
