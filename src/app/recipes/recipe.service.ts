import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    
    private recipes: Recipe[] = [
        new Recipe(
          'A test recipe',
          'This is simply a test',
          'http://www.seriouseats.com/recipes/assets_c/2016/03/20160309-peanut-sweet-potato-kale-coconut-soup-stew-19-thumb-1500xauto-430284.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
        new Recipe(
          'Another test recipe',
          'This is simply a test',
          'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ]),
        new Recipe(
          'A recipe of chicken',
          'This is simply a test',
          'http://www.seriouseats.com/recipes/assets_c/2016/03/20160309-peanut-sweet-potato-kale-coconut-soup-stew-19-thumb-1500xauto-430284.jpg',
        [
          new Ingredient('Rice', 3),
          new Ingredient('Chicken', 1)
        ])
      ]; //an array of Recipes
    
      constructor(private slService: ShoppingListService){}

      getRecipes() {
        return this.recipes.slice(); //slice() returns an array which is a copy of recipes.
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      } 
}