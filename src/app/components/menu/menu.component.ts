import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  mealDescription: string = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo";

  // image place holders
  breakfastImg: string = "https://img.freepik.com/premium-vector/isolated-tea-pot-bread_24640-51252.jpg?w=740";
  brunchImg: string = "https://www.pngkey.com/png/detail/463-4631995_brunch-vector-flat-food-breakfast-icon-vector.png";
  lunchImg: string = "https://cdn4.iconfinder.com/data/icons/hotel-services-and-city-elements-2/512/417hotel__dish_food_glass-512.png";
  fruitImg: string = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6619e040680137.57888a7c16e96.png";

  breakfast = [
    {name: "Breakfast", cost: "₦200", content: this.mealDescription, img: this.breakfastImg},
    {name: "Breakfast", cost: "₦350", content: this.mealDescription, img: this.breakfastImg},
    {name: "Breakfast", cost: "₦800", content: this.mealDescription, img: this.breakfastImg},
    {name: "Breakfast", cost: "₦1000",content: this.mealDescription, img: this.breakfastImg},
    {name: "Breakfast", cost: "₦50",  content: this.mealDescription, img: this.breakfastImg},
    {name: "Breakfast", cost: "₦100", content: this.mealDescription, img: this.breakfastImg}
  ];

  brunch = [
    {name: "Brunch", cost: "₦200", content: this.mealDescription, img: this.brunchImg},
    {name: "Brunch", cost: "₦350", content: this.mealDescription, img: this.brunchImg},
    {name: "Brunch", cost: "₦800", content: this.mealDescription, img: this.brunchImg},
    {name: "Brunch", cost: "₦1000",content: this.mealDescription, img: this.brunchImg}
  ];

  lunch = [
    {name: "Lunch", cost: "₦200", content: this.mealDescription, img: this.lunchImg},
    {name: "Lunch", cost: "₦350", content: this.mealDescription, img: this.lunchImg},
    {name: "Lunch", cost: "₦800", content: this.mealDescription, img: this.lunchImg},
    {name: "Lunch", cost: "₦1000",content: this.mealDescription, img: this.lunchImg},
    {name: "Lunch", cost: "₦100", content: this.mealDescription, img: this.lunchImg},
    {name: "Lunch", cost: "₦800", content: this.mealDescription, img: this.lunchImg},
    {name: "Lunch", cost: "₦1500",content: this.mealDescription, img: this.lunchImg}
  ];

  fruit = [
    {name: "Fruit", cost: "₦200", content: this.mealDescription, img: this.fruitImg},
    {name: "Fruit", cost: "₦350", content: this.mealDescription, img: this.fruitImg},
    {name: "Fruit", cost: "₦800", content: this.mealDescription, img: this.fruitImg},
    {name: "Fruit", cost: "₦1000",content: this.mealDescription, img: this.fruitImg},
    {name: "Fruit", cost: "₦50",  content: this.mealDescription, img: this.fruitImg},
    {name: "Fruit", cost: "₦100", content: this.mealDescription, img: this.fruitImg}
  ];

  mealSections = [
    {title: "Breakfast", items: this.breakfast},
    {title: "Brunch", items: this.brunch},
    {title: "Lunch", items: this.lunch},
    {title: "Fruit", items: this.fruit},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
