import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listlinks',
  templateUrl: './listlinks.component.html',
  styleUrls: ['./listlinks.component.css']
})
export class ListlinksComponent implements OnInit {

  info = [
    {
      category: 'Further Ahead',
      links: [
        {
          url: '/detail/now',
          label: 'Now'
        },
        {
          url: '/detail/hourly',
          label: 'Hourly'
        },
        {
          url: '/detail/daily',
          label: 'Daily'
        },
      ]
    },
    
    { category: 'Around the globe',
       links: [
        {
          url: '/',
          label: 'Winter Center'
        },
        {
          url: '/',
          label: 'Hurricane'
        },
        {
          url: '/',
          label: 'Radar & Maps'
        },
        {
          url: '/',
          label: 'Severe Weather'
        },
        {
          url: '/',
          label: 'Video'
        },
        {
          url: '/',
          label: 'News'
        },
        {
          url: '/',
          label: 'Podcasts'
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
