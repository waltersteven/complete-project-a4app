import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe','This is simply a test','http://www.seriouseats.com/recipes/assets_c/2016/03/20160309-peanut-sweet-potato-kale-coconut-soup-stew-19-thumb-1500xauto-430284.jpg'),
    new Recipe('A test recipe','This is simply a test','http://www.seriouseats.com/recipes/assets_c/2016/03/20160309-peanut-sweet-potato-kale-coconut-soup-stew-19-thumb-1500xauto-430284.jpg'),
    new Recipe('A test recipe','This is simply a test','http://www.seriouseats.com/recipes/assets_c/2016/03/20160309-peanut-sweet-potato-kale-coconut-soup-stew-19-thumb-1500xauto-430284.jpg')
  ]; //an array or Recipes

  constructor() { }

  ngOnInit() {
  }

}
