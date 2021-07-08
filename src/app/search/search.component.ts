import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../interfaces/city';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() changeWeather = new EventEmitter<any>();
  //currentWeather: any;

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

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.onChange();
  }

  onChange(): void {
    this.weatherService.getWeather(this.value.name, this.value.country).subscribe((response: any) => {
      console.log(response.data[0]);
      //this.currentWeather = response.data[0];

      this.changeWeather.emit(response.data[0]);
    });
  }
  
}
