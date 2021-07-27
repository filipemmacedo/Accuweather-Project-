import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { LocationService } from '../../location.service';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {
  errorMessage: string | null = null;
  weather: any = null;
  iconImg: string | null = null;
  description: any = '';
  hoje: any = new Date();
  
  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService
  ) {}


  ngOnInit(): void {
    const savedLocation = JSON.parse(localStorage.getItem('userSavedLocation') || '""');

    if(savedLocation) {
      this.getWeather(savedLocation.country, savedLocation.name);
    } else {
      this._geoLocation.getCity().subscribe((data: any) => {
        this.getWeather(data.country, data.city);
      });     
    }
  }

  getWeather(country: string, city: string): void {
    this.errorMessage = null;
    this.weather = null;

    this._weather
      .getWeather(city, country)
      .subscribe((data: any) => {
        if(data) {
          this.weather = data['data'][0];
          this.iconImg = `https://www.weatherbit.io/static/img/icons/${data['data'][0].weather.icon}.png`;
          this.description = data['data'][0].weather.description;
        } else {
          this.errorMessage = 'No information available. Try again later...';
        }
                  
    });
  }
}
