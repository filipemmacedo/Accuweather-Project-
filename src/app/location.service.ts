import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private geolocation: HttpClient) { }

getCity() {
  return this.geolocation.get('http://ip-api.com/json/');
 }
}