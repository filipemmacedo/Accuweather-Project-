import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentWeather: any;
  backgroundImages: string[] = [
    'https://www.accuweather.com/images/hero/1/1440x450.jpg',
    'https://www.accuweather.com/images/hero/2/1440x450.jpg',
    'https://www.accuweather.com/images/hero/3/1440x450.jpg',
    'https://www.accuweather.com/images/hero/4/1440x450.jpg',
    'https://www.accuweather.com/images/hero/5/1440x450.jpg',
    'https://www.accuweather.com/images/hero/6/1440x450.jpg'
  ];
  currentBackground: string = '';

  constructor() { }

  ngOnInit(): void {
    this.currentBackground = this.getBackgroundImage();
    console.log(this.currentBackground);
  }

  onChangeWeather(value: any): void {
    this.currentWeather = value;
  }

  getBackgroundImage(): string {
    const index = Math.floor(Math.random() * this.backgroundImages.length);
    console.log(index);
    return this.backgroundImages[index];
  }

}
