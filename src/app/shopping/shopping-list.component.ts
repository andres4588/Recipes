import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit {
    @Output() ingredientWasSelected = new EventEmitter <Ingredient>();
    ingredients: Ingredient [] = [];
    
    constructor( private shoppingListService: ShoppingListService) {
        //cole.log(this.ingredients)
    }
    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredient();
        this.shoppingListService.ingredientsNew.
        subscribe((ingredient: Ingredient []) => {
            this.ingredients = ingredient;
        })
    }
    
    
}