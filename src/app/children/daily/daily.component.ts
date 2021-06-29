import { LocationService } from './../../location.service';
import { WeatherService } from './../../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  geoLocation: any = {};
  weather: any = [];
  iconImg: string = '';
  
  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService
  ) {}

  ngOnInit(): void {
    this._geoLocation.getCity().subscribe((data: any) => {
      this.geoLocation = data;
      this._weather
          .getDaily(this.geoLocation.city, this.geoLocation.country)
          .subscribe((data: any) => {
            this.weather = data['data'];    
      });
    });
  }
}