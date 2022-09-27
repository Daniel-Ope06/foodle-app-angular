import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarLinks = [
    {label: "Home", routerLink: "home"},
    {label: "Menu", routerLink: "menu"},
    {label: "About", routerLink: "about"},
    {label: "Services", routerLink: "services"},
    {label: "Team", routerLink: "team"},
    {label: "Contact", routerLink: "contact"},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
