import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe','This is simply a test','http://www.seriouseats.com/recipes/assets_c/2016/03/20160309-peanut-sweet-potato-kale-coconut-soup-stew-19-thumb-1500xauto-430284.jpg'),
        new Recipe('Another test recipe','This is simply a test','http://www.seriouseats.com/recipes/assets_c/2016/03/20160309-peanut-sweet-potato-kale-coconut-soup-stew-19-thumb-1500xauto-430284.jpg'),
        new Recipe('A recipe of chicken','This is simply a test','http://www.seriouseats.com/recipes/assets_c/2016/03/20160309-peanut-sweet-potato-kale-coconut-soup-stew-19-thumb-1500xauto-430284.jpg')
      ]; //an array of Recipes
    
      getRecipes() {
        return this.recipes.slice(); //slice() returns an array which is a copy of recipes.
      }
}