import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarLinks = [
    {label: "Home", isActive: true, routerLink: "home"},
    {label: "Menu", isActive: false, routerLink: "menu"},
    {label: "About", isActive: false, routerLink: "about"},
    {label: "Services", isActive: false, routerLink: "services"},
    {label: "Team", isActive: false, routerLink: "team"},
    {label: "Contact", isActive: false, routerLink: "contact"},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
