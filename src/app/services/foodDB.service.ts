import { Database, ref, get, set, update, remove, query, orderByChild } from '@angular/fire/database';
import { Food } from '../models/food.model';
import { MealDisplay } from 'src/app/models/meal-display.model';

export class FoodDB{
    public static getFoodSection(db: Database, section: string){

        // image placeholders
        let breakfastImg: string = "assets/images/isolated-tea-pot-bread.jpg";
        let brunchImg: string = "assets/images/brunch-vector-flat-food.jpg";
        let lunchImg: string = "assets/images/dish_food_glass-512.jpg";
        let fruitImg: string = "assets/images/apple_fruit.jpg";

        let mealDescription: string = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo";
        let imgLink: string;

        let arr: MealDisplay[] = [];

        if (section === "breakfast"){
          arr = [
            {name: "Breakfast 1", cost: "₦200", content: mealDescription, img: breakfastImg},
            {name: "Breakfast 2", cost: "₦350", content: mealDescription, img: breakfastImg},
            {name: "Breakfast 3", cost: "₦800", content: mealDescription, img: breakfastImg},
            {name: "Breakfast 4", cost: "₦1000",content: mealDescription, img: breakfastImg},
            {name: "Breakfast 5", cost: "₦50",  content: mealDescription, img: breakfastImg},
            {name: "Breakfast 6", cost: "₦100", content: mealDescription, img: breakfastImg}
          ];
          imgLink = breakfastImg;
        }
        else if (section === "brunch"){
          arr = [
            {name: "Brunch 1", cost: "₦200", content: mealDescription, img: brunchImg},
            {name: "Brunch 2", cost: "₦350", content: mealDescription, img: brunchImg},
            {name: "Brunch 3", cost: "₦800", content: mealDescription, img: brunchImg},
            {name: "Brunch 4", cost: "₦1000",content: mealDescription, img: brunchImg}
          ];
          imgLink = brunchImg;
        }
        else if (section === "lunch"){
          arr = [
            {name: "Lunch 1", cost: "₦200", content: mealDescription, img: lunchImg},
            {name: "Lunch 2", cost: "₦350", content: mealDescription, img: lunchImg},
            {name: "Lunch 3", cost: "₦800", content: mealDescription, img: lunchImg},
            {name: "Lunch 4", cost: "₦1000",content: mealDescription, img: lunchImg},
            {name: "Lunch 5", cost: "₦100", content: mealDescription, img: lunchImg},
            {name: "Lunch 6", cost: "₦800", content: mealDescription, img: lunchImg},
            {name: "Lunch 7", cost: "₦1500",content: mealDescription, img: lunchImg}
          ];
          imgLink = lunchImg;
        }
        else if (section === "fruit"){
          arr = [
            {name: "Fruit 1", cost: "₦200", content: mealDescription, img: fruitImg},
            {name: "Fruit 2", cost: "₦350", content: mealDescription, img: fruitImg},
            {name: "Fruit 3", cost: "₦800", content: mealDescription, img: fruitImg},
            {name: "Fruit 4", cost: "₦1000",content: mealDescription, img: fruitImg},
            {name: "Fruit 5", cost: "₦50",  content: mealDescription, img: fruitImg},
            {name: "Fruit 6", cost: "₦100", content: mealDescription, img: fruitImg}
          ];
          imgLink = fruitImg;
        }

        get(ref(db, 'menu')).then((snapshot) => {
          if (snapshot.exists()) {
            snapshot.forEach(element =>{
              if(element.val().category === section){
                arr.push({
                  name: element.val().name.charAt(0).toUpperCase() + element.val().name.slice(1),
                  cost: `₦${element.val().cost.toString()}`,
                  content: mealDescription,
                  img: imgLink
                });
              }
            });
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
        return arr;
    }

    public static addToCartDB(db: Database, meal: MealDisplay): void{
      const foodID: string = meal.name;
      set(ref(db, `cart/${foodID}`), {
          name: meal.name,
          cost : meal.cost,
          img: meal.img
        });
    }

    public static getCartDB(db: Database): MealDisplay[]{
      let arr: MealDisplay[] = [];
      get(ref(db, 'cart')).then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach(element =>{
            arr.push(element.val());
          });
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      return arr;
    }
}