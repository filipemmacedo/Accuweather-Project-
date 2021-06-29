import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  geoLocation: any = {};
  weather: any = {};
  iconImg: string = '';

  constructor(
    public router: Router,
    private _weather: WeatherService,
    private _geoLocation: LocationService     
  ) {}

  ngOnInit(): void {
    this._geoLocation.getCity().subscribe((data: any) => {
      this.geoLocation = data;
      this._weather
          .getWeather(this.geoLocation.city, this.geoLocation.country)
          .subscribe((data: any) => {
            this.weather = data['data'][0];
            let icon = data['data'][0].weather.icon;
            this.iconImg = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
          });
    });
       
  }
}


