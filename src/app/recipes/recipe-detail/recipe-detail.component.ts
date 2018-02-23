import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

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

  onEditRecipe(){
    // this.router.navigate(['edit'],{relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); //ANOTHER WAY TO REDIRECT: first we go one level up, add this.id and add edit (everything relative to the actual route).
  }

}
