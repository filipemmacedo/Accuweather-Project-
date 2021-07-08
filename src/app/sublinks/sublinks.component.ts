import { Component, OnInit, Input } from '@angular/core';
import { Sublink } from '../interfaces/sublink';

@Component({
  selector: 'app-sublinks',
  templateUrl: './sublinks.component.html',
  styleUrls: ['./sublinks.component.css']
})
export class SublinksComponent implements OnInit {

  @Input() links: Sublink[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
