import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  
  ngOnInit() {
  }

  // WE WILL NO LONGER USE THE EMITTER BECAUSE NOW WE'LL USE ROUTING
  // onSelected(){
  //   this.recipeService.recipeSelected.emit(this.recipe); //Instead of emitting from the service itself, we can emit it from here
  // }


}
