import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number;
  
  constructor( private recipeServie: RecipeService,
    private router: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeServie.getRecipebyId(this.id);
      }
    )
  }

  addToshopping(){
    this.recipeServie.addIngredientsToShoppingList(this.recipe.ingredient);
  }
  editRecipe(){
    this.route.navigate(['edit'],  {relativeTo: this.router})
  }
 

}
