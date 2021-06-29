import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  viewMenu(){
    const navBar = document.querySelector('.nav-bar') as HTMLElement;
    const navRoutes = document.querySelector('.navbar-links') as HTMLElement;
    const fecha = document.querySelector('.fecha') as HTMLElement;
    const menu = document.querySelector('.menu') as HTMLElement;
    

    navBar.classList.toggle('active');
    navRoutes.classList.toggle('active');
    fecha.classList.toggle('active');
    menu.classList.toggle('active');
  }
  
}
