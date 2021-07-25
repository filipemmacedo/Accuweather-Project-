import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [
    {
      url: 'trending now',
      label: 'Trending Now',
    },
    {
      url: 'field coverage',
      label: 'Field Coverage',
    },
    {
      url: 'expert forecasts',
      label: 'Expert forecasts',
    },
    {
      url: 'global',
      label: 'Global',
    },
    {
      url: 'accuweather ready',
      label: 'Accuweather ready',
    },
    {
      url: 'space',
      label: 'Space',
    },
    {
      url: 'animals',
      label: 'Animals',
    },
    {
      url: 'health',
      label: 'Health',
    },
    {
      url: 'science',
      label: 'Science',
    },
    {
      url: 'accusports',
      label: 'Accusports',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
