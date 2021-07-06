import { WeatherService } from './../../weather.service';
import { LocationService } from './../../location.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css'],
})
export class HourlyComponent implements OnInit {
  geoLocation: any = {};
  weather: any = [];
  iconImg: string = '';
  
  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService
  
  ) { }

  ngOnInit(): void {
    this._geoLocation.getCity().subscribe((data: any) => {
      this.geoLocation = data;
      /* this._weather
          .getMinutely(this.geoLocation.city, this.geoLocation.country)
          .subscribe((data: any) => {
            this.weather = data['data'];
      }); */
      this._weather
        .getHourly(this.geoLocation.lat, this.geoLocation.lon)
        .subscribe((result: any) => {
          let data = result.hourly;
          for(let i = 0; i < data.length; i++) {
            let nextDate = new Date();
            nextDate.setHours(nextDate.getHours() + i);
            data[i].hour = nextDate;
          }
          this.weather = data;
      });
    });
  }
}
