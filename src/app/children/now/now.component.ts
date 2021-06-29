import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { LocationService } from '../../location.service';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {
  geoLocation: any = {};
  weather: any = {};
  iconImg: string = '';
  description: any = '';
  hoje: any = new Date();
  
  constructor(
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
            let description = data['data'][0].weather.description
            this.description = description            
        });
    });       
  }
}
