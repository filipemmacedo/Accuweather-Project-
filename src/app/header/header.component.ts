import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentWeather: any;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeWeather(value: any): void {
    this.currentWeather = value;
  }

}
