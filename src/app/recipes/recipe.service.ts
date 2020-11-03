import { ShoppingListService } from './../shopping/shopping-list.service';
import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter <Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Recipe test',
        'Simple Description',
         'https://c.pxhere.com/images/92/6d/1fcf04d9135a513521818664d831-1583323.jpg!d',
         [
             new Ingredient('Meat', 1),
             new Ingredient('French fries', 20)
         ]),
         new Recipe('Arepa', 
         'Arepa Description',
         'https://animalgourmet.com/wp-content/uploads/2019/09/arepas-colombianas.jpg',
         [
            new Ingredient('Egg', 2),
            new Ingredient('flour', 1)
        ])
      ];
    constructor(private serviceShopping: ShoppingListService){
        
    }

    getRecipe(){
       return this.recipes.slice();
    }
    getRecipebyId(index: number): Recipe{
        return this.recipes[index];
     }
    
    addIngredientsToShoppingList(ingredient: Ingredient[]){
        this.serviceShopping.addIngredients(ingredient);
    }
}