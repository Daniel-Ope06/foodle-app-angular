import { Component, OnInit } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Food } from 'src/app/models/food.model';
import { FoodDB } from 'src/app/services/foodDB.service';
//[src]=meal.img
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  breakfastMenu: { name: string; cost: string; content: string; img: string; }[];
  brunchMenu: { name: string; cost: string; content: string; img: string; }[];
  lunchMenu: { name: string; cost: string; content: string; img: string; }[];
  fruitMenu: { name: string; cost: string; content: string; img: string; }[];
  mealSections: {title: string, items: { name: string; cost: string; content: string; img: string; }[]}[];

  constructor(public database: Database) {
    this.breakfastMenu = FoodDB.getFoodSection(this.database, "breakfast");
    this.brunchMenu = FoodDB.getFoodSection(this.database, "brunch");
    this.lunchMenu = FoodDB.getFoodSection(this.database, "lunch");
    this.fruitMenu = FoodDB.getFoodSection(this.database, "fruit");

    this.mealSections = [
      {title: "Breakfast", items: this.breakfastMenu},
      {title: "Brunch", items: this.brunchMenu},
      {title: "Lunch", items: this.lunchMenu},
      {title: "Fruit", items: this.fruitMenu},
    ];
  }

  ngOnInit(): void {
  }
}