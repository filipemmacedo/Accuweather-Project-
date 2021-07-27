import { Component, OnInit } from '@angular/core';
import { Listnews } from '../interfaces/listnews';

@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.css']
})
export class ListnewsComponent implements OnInit {

  highlighted: Listnews[] = [
    {
      url:'/',
      label:'Tokyo Olympics could be one of the hottest games on record',
      image: 'https://cdn.jwplayer.com/v2/media/9rPtxfTy/poster.jpg?w=348&h=260&crop=1',
    },
  ]

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
