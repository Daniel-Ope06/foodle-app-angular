import { Component, OnInit } from '@angular/core';
import { Database } from '@angular/fire/database';
import { MealDisplay } from 'src/app/models/meal-display.model';
import { FoodDB } from 'src/app/services/foodDB.service';
import { MatDialog } from '@angular/material/dialog';
import { CartPopupComponent } from '../cart-popup/cart-popup.component';

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

  cartList: MealDisplay[];

  constructor(public database: Database, public dialog: MatDialog) {
    this.cartList = FoodDB.getCartDB(this.database);
   }

  ngOnInit(): void {
  }

  openCartDialog(): void{
    const cartDialog = this.dialog.open(CartPopupComponent);
    console.log("click");
  }
}
