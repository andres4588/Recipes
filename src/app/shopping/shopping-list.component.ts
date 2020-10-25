import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit {
    @Output() ingredientWasSelected = new EventEmitter <Ingredient>();
    ingredients: Ingredient [] = [
        new Ingredient('Apples', 5 ),
        new Ingredient('Tomatoes', 10 )
    ];
   
    constructor(){
        console.log(this.ingredients)
    }
    ngOnInit(): void {
    }

    addIngredient(ingredient): void{
        this.ingredients.push(ingredient)
    }
}