import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getSeattle(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=7b1dbff542d1f43523c4c31cae56f7cc');
  }

  getChicago(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=7b1dbff542d1f43523c4c31cae56f7cc');
  }

  getBurbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank&APPID=7b1dbff542d1f43523c4c31cae56f7cc');
  }

  getDallas(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dallas&APPID=7b1dbff542d1f43523c4c31cae56f7cc');
  }

  getDc(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=20001,us&APPID=7b1dbff542d1f43523c4c31cae56f7cc');
  }

  getSanjose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=95002,us&APPID=7b1dbff542d1f43523c4c31cae56f7cc');
  }

}
