import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>(); //it will emit an array of ingredients
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredients(){
          return this.ingredients.slice(); //slice() returns an array which is a copy of ingredients.
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice()); 
      }

      addIngredients(ingredients: Ingredient[]){
        //ineficient way
        //   for(let ingredient of ingredients){
        //       this.addIngredient(ingredient);
        //   }

        this.ingredients.push(...ingredients); //push in a time ingredients as a list
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}