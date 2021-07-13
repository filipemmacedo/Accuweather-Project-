import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topstories',
  templateUrl: './topstories.component.html',
  styleUrls: ['./topstories.component.css']
}) 
export class TopstoriesComponent implements OnInit {

  info = [
    {
      category: 'Further Ahead',
      links: [
        {
          url: '/',
          category: 'travel',
          label: `Mysterious mansion ruins wash up on beach, captivate onlookers`,
          time: '1 day ago',
          image: 'https://cms.accuweather.com/wp-content/uploads/2021/07/Screen-Shot-2021-07-09-at-10.34.10-AM.png?w=64&h=64&crop=1'
        },
        {
          url: '/',
          category: 'Weather News',
          label:  `Unfathomable heat helped June smash North America record`,
          time: '22 hours ago',
          image: 'https://cms.accuweather.com/wp-content/uploads/2021/07/APTempPhoto-2.jpeg?w=64&h=64&crop=1'
        },
        {
          url: '/',
          category: 'Hurricane',
          label:  `6 things to know about Tropical Storm Elsa`,
          time: '22 hours ago',
          image: 'https://cms.accuweather.com/wp-content/uploads/2021/07/Screen-Shot-2021-07-08-at-3.42.28-PM.png?w=64&h=64&crop=1'
        },
        {
          url: '/',
          category: '',
          label: `A grand fireworks display`,
          time: '3 days ago',
          videotime: '1:01',
          image: 'https://cdn.jwplayer.com/v2/media/7Mo5aAEg/poster.jpg?w=104&h=58&crop=1'
        },
        {
          url: '/',
          label: '',
          text: `Podcast: Finally a break from extreme weather`,
          time: '', 
          image: 'https://cms.accuweather.com/wp-content/uploads/2020/11/weatherinsider-podcastcover.jpg?w=64&h=64&crop=1'

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
