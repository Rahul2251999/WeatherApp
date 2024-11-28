import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(cityName: string){
    this.http.get(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.xrapidapihostName, environment.xrapidapihostValue)
      .set(environment.xapidapikeyrName, environment.xrapidapikeyValue),
      params: new HttpParams()
      .set('q',cityName)
      .set('units','metric')
      .set('mode','json')

    })
  }
}
