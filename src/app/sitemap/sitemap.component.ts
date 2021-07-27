import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  info = [
    {
      category: 'Company',
      links: [
        {
          url: '/',
          label: 'Proven Superior Accuracy'
        },
        {
          url: '/',
          label: 'About AccuWeather'
        },
        {
          url: '/',
          label: 'Digital Advertising'
        },
        {
          url: '/',
          label: 'Careers'
        },
        {
          url: '/',
          label: 'Press'
        },
        {
          url: '/',
          label: 'Contact Us'
        },
      ]
    },
    {
      category: 'Products & Services',
      links: [
        {
          url: '/',
          label: 'For Business'
        },
        {
          url: '/',
          label: 'Foor Partners'
        },
        {
          url: '/',
          label: 'For Advertising'
        },
        {
          url: '/',
          label: 'AccuWeather APIs'
        },
        {
          url: '/',
          label: 'Podcast'
        },
      ]
    },
    {
      category: `App's & Downloads`,
      links: [
        {
          url: '/',
          label: 'iPhone App'
        },
        {
          url: '/',
          label: 'Android App'
        },
        {
          url: '/',
          label: `See All App's & downloads`
        },
      ] 
    },
      {
        category: 'Subscription Services', 
        links: [
          {
            url: '/',
            label: 'AccuWeather Premium'
          },
          {
            url: '/',
            label: 'AccuWeather Professional'
          },
        ]
      },
      {
      category: 'More',
      links: [
        {
          url: '/',
          label: 'AccuWeather Shop'
        },
        {
          url: '/',
          label: 'AccuWeather Ready'
        },
        {
          url: '/',
          label: 'Business'
        },
        {
          url: '/',
          label: 'Health'
        },
        {
          url: '/',
          label: 'Hurricane'
        },
        {
          url: '/',
          label: 'Leisure and Recreation'
        },
        {
          url: '/',
          label: 'Severe Weather '
        },
        {
          url: '/',
          label: 'Space and Astronomy'
        },
        {
          url: '/',
          label: 'Sports'
        },
        {
          url: '/',
          label: 'Travel'
        },
        {
          url: '/',
          label: 'Weather News'
        },
        {
          url: '/',
          label: 'Weather Blogs'
        },
        {
          url: '/',
          label: 'Winter Weather'
        },
      ]
    }
  ]
}
