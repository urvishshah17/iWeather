import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apikey = 'fed774dd2fdbda09c3e5600631cfa4ce';
  url;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'https://api.darksky.net/forecast/+apikey+/q';

  }
  getweather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json').map(res => res.json());

  }

}
