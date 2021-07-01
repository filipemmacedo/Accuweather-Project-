import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  @Input() data: any = {};

  constructor() {}

  ngOnInit(): void {}
}


