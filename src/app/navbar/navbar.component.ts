import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  viewMenu(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  
}
