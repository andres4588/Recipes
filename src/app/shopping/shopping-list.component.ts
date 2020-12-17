import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient [] = [];
    private subscription: Subscription;
    
    constructor( private shoppingListService: ShoppingListService) {
    }
    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredient();
        this.subscription = this.shoppingListService.ingredientsNew.
        subscribe((ingredient: Ingredient []) => {
            this.ingredients = ingredient;
        });
    }

    ngOnDestroy(): void{
        this.subscription.unsubscribe();
    }
}