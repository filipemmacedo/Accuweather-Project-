import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../interfaces/city';
import { LocationService } from './../location.service';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() changeWeather = new EventEmitter<any>();

  cities: City[] = [
    { 
      name: 'Oporto',
      country: 'pt',
    },
    {
      name: 'Madrid',
      country: 'es',
    },
    {
      name: 'Paris',
      country: 'fr',
    },
    {
      name: 'London',
      country: 'uk'
    },
    {
      name: 'Amsterdam',
      country: 'nl'
    },
    {
      name: 'Rome',
      country: 'it'
    },
    {
      name: 'Moscow',
      country: 'ru'
    },
    {
      name: 'New York',
      country: 'us'
    },
    {
      name: 'Rio de Janeiro',
      country: 'br'
    },
    {
      name: 'Cape Town',
      country: 'za'
    },
    {
      name: 'Sidney',
      country: 'au'
    },
    {
      name: 'Beijing',
      country: 'cn'
    },
  ];

  value: City = this.cities[0];

  constructor(private weatherService: WeatherService, private locationService: LocationService) { }

  ngOnInit(): void {
    const savedLocation = JSON.parse(localStorage.getItem('userSavedLocation') || '""');

    if(savedLocation) {
      const index = this.cities.findIndex((city) => city.name === savedLocation.name );
      if(index) {
        this.value = this.cities[index];
        this.onChange();
      } else {
        this.getCurrentLocation();
      }
    } else {
      this.getCurrentLocation();
    }
  }

  getCurrentLocation(): void {
    this.locationService.getCity().subscribe((data: any) => {
      if(data.status === 'success') { // TODO: check if city is already on the options list
        this.cities.unshift({
          name: data.city,
          country: data.countryCode,
        });
        this.value = this.cities[0];
      }

      this.onChange();
    });
  }

  onChange(): void {
    localStorage.setItem('userSavedLocation', JSON.stringify(this.value));
    this.weatherService.getWeather(this.value.name, this.value.country).subscribe((response: any) => {
      this.changeWeather.emit(response.data[0]);
    });
  }
  
}
