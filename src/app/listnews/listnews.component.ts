import { Component, OnInit } from '@angular/core';
import { Listnews } from '../interfaces/listnews';

@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.css']
})
export class ListnewsComponent implements OnInit {

  info: Listnews[] = [
    {
      url: '/',
      label: `The toilet turning human waste into energy`,
    },
    {
      url: '/',
      label: `Power company to bury 10,000 miles of lines to reduce wildfire risk`,
    },
    {
      url: '/',
      label: `Scallop season begins along parts of Florida Gulf coast`,
    },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
