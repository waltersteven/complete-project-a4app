import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    //retrieving the ID
    // const id = this.route.snapshot.params['id']; //We don't use this approach because we can change of recipe dinamically, it's not a single id
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; // + : casting from string to number
        this.recipe = this.recipeService.getRecipe(this.id);
      } 
    );
  }
  
  onAddShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
