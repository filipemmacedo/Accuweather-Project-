import { Component, OnInit } from '@angular/core';
import { Sublink } from '../interfaces/sublink';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  sublinks: Sublink[] = [
    {
      url: 'now',
      label: 'Now',
    },
    {
      url: 'hourly',
      label: 'Hourly',
    },
    {
      url: 'daily',
      label: 'Daily',
    },
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
