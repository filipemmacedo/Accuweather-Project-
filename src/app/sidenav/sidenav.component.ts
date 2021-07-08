import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() isOpen: boolean = false;
  @Output() closeMenu = new EventEmitter<any>();

  info = [
    {
      category: 'Weather',
      nav: [
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
    {
      category: 'Around the globe',
      nav: [
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

  onClose(): void {
    this.closeMenu.emit();
  }

}
