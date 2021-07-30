import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentWeather: any;
  currentBackground: string = '';
  currentTime: any ='';

  backgroundImagesDay: string[]=[
    '../../assets/img/background/day0.jpg',
    '../../assets/img/background/day1.jpg',
    '../../assets/img/background/day2.jpg',
    '../../assets/img/background/day3.jpg',
    '../../assets/img/background/day4.jpg',
    '../../assets/img/background/day5.jpg',
    '../../assets/img/background/day6.jpg',
  ]
  backgroundImagesNight: string[]=[
    '../../assets/img/background/night0.jpg',
    '../../assets/img/background/night1.jpg',
    '../../assets/img/background/night2.jpg',
    '../../assets/img/background/night3.jpg',
    '../../assets/img/background/night4.jpg',
    '../../assets/img/background/night5.jpg',
    '../../assets/img/background/night6.jpg',
  ]

  constructor(private weather:WeatherService) { }

  ngOnInit(): void {
    this.currentBackground = this.getBackgroundImage();
    console.log(this.currentBackground);
  }

  onChangeWeather(value: any): void {
    this.currentWeather = value;
  }

  getBackgroundImage(): string {
    const currentTime = new Date().getHours();
    
    if(currentTime > 6 &&  currentTime <18) { 
      const indexDay = Math.floor(Math.random() * this.backgroundImagesDay.length);
      return this.backgroundImagesDay[indexDay];
    } else {
      const indexNight = Math.floor(Math.random() * this.backgroundImagesNight.length);
      return this.backgroundImagesNight[indexNight];
    }
  }



}
