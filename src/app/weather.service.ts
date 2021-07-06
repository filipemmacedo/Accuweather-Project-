import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private weather: HttpClient , private daily: HttpClient, private hourly: HttpClient) { }

  getWeather(city:string, country:string){
    return this.weather.get(`https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=013bdb10ad584af59d0ea654c3f85710`);
  }
 
  getDaily(city: string, country:string) {
    return this.daily.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&days=15&key=013bdb10ad584af59d0ea654c3f85710`)
  }

  getMinutely(city: string, country:string) {
    return this.hourly.get(`https://api.weatherbit.io/v2.0/forecast/minutely?city=${city}&country=${country}&key=013bdb10ad584af59d0ea654c3f85710`)
  }

  getHourly(lat: number, lon: number) {
    return this.hourly.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=9aaea19f07fb7197df88f0d2788dba32&units=metric`);
  }
  
}
