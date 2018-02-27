import { Component, OnInit } from '@angular/core';
// import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] //it will be shared the same instance in this component and child components.
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;

  constructor(){}

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe; //we subscribe to the emitter launched on recipe-item.component.ts
    //   }
    // ); //to get inform of changes


  }

}
