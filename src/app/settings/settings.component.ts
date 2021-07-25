import { Component, OnInit } from '@angular/core';
import { Language } from '../interfaces/languages';
import { Metric } from '../interfaces/metrics';
import { MapStyle } from './../interfaces/mapStyle';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  languages: Language[] = [
    {
      type: 'English',
      country: 'US',
    },
    {
      type: 'Español',
      country: 'ES',
    },
    {
      type: 'Português',
      country: 'PT',
    },
    {
      type: 'Français',
      country: 'FR',
    },
    {
      type: 'English',
      country: 'UK',
    },
    {
      type: 'Português',
      country: 'BR',
    },
    {
      type: 'Dansk',
      country: 'DN',
    },
    {
      type: 'Netherlands',
      country: 'NL',
    },
    {
      type: 'Italiano',
      country: 'IT',
    },
  ];

  value: Language = this.languages[2];

  metrics: Metric[] = [
    {
      definition: 'Métrico',
      unity: '(ºC,Km/H,Mn)',
    },
    {
      definition: 'Imperial',
      unity: '(ºF,Mph,In)',
    },
  ];
  valueM: Metric = this.metrics[0];

  mapStyles: MapStyle[] = [
    {
      style: 'Light',
    },
    {
      style: 'Dark',
    },
  ];
  valueS: MapStyle = this.mapStyles[0];

  constructor() { }

  ngOnInit(): void {
  }

}
