import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients(); //When the app loads.
    this.slService.ingredientsChanged.subscribe(  //Whenever ingredients change it will be obtained from here.
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
