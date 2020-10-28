import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) inputName: ElementRef;
  @ViewChild('amountInput', {static: true}) inputAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    
  }
  addItem(): void{
    //console.log(this.inputName.nativeElement.value);
    const ingName= this.inputName.nativeElement.value;
    const ingAmount = this.inputAmount.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount)
    this.shoppingListService.addIngredient(ingredient);
  }

}
