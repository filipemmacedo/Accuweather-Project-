import { Component, OnInit } from '@angular/core';
import { Podcast } from '../interfaces/podcast';
@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  podcasts: Podcast[] = [
    {
      image: 'https://www.accuweather.com/images/components/core/podcast-list/accu-daily.jpg',
      title: 'Accuweather Daily',
      description: 'This Brief host-read article is news in a nutshell! Stay updated by listening to the to story every morning.',
      link: 'See Episodes',
    },
    {
      image:'https://www.accuweather.com/images/components/core/podcast-list/ev-un-sun-dd.jpg',
      title: 'Everything Under The Sun',
      description: 'Everything Under The Sun is a blend of fun anda interesting weather stories in science, media and history.',
      link: 'See Episodes',
    },
    {
      image:'https://www.accuweather.com/images/components/core/podcast-list/weather-insider.jpg',
      title: 'Weather Insider',
      description: 'Stay informed with Bernie Rayno as he explains weather terms and report on breaking weather news in less than 15 minutes.',
      link: 'See Episodes',
    },
    {
      image:'https://www.accuweather.com/images/components/core/podcast-list/history.jpg',
      title: 'This Date in Weather History',
      description: "'Every day AccuWeather's Meteorologist, Evan Myers takes a look back on weather events that impacted this date.'",
      link: 'See Episodes',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
