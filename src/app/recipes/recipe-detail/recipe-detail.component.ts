import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  
  constructor( private recipeServie: RecipeService) { }

  ngOnInit(): void {
  }

  addToshopping(){
    this.recipeServie.addIngredientsToShoppingList(this.recipe.ingredient)
  }

}
