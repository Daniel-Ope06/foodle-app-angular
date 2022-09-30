import { Database, ref, get, set, update, remove, query, orderByChild } from '@angular/fire/database';
import { Food } from '../models/food.model';

export class FoodDB{
    public static getAllFoods(db: Database): Food[]{
        let arr: Food[] = [];
        get(ref(db, 'menu')).then((snapshot) => {
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

    public static addMeal(mealArray: {}[], addedArray: Food[], imgLink: string): void{
      addedArray.forEach((element: Food) => {
        mealArray.push({
          name: `${element.name.charAt(0).toUpperCase()} + ${element.name.slice(1)}`,
          cost: `₦${element.cost.toString()}`,
          content: element.description,
          img: imgLink
        });
      });
    }
}