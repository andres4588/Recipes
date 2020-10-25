import { Recipe } from './../recipes.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipedWasSelected = new EventEmitter <Recipe>();
   recipes: Recipe[] = [
    new Recipe('Recipe test', 'Simple Description',
     'https://c.pxhere.com/images/92/6d/1fcf04d9135a513521818664d831-1583323.jpg!d'),
     new Recipe('Arepa', 'Arepa Description',
     'https://animalgourmet.com/wp-content/uploads/2019/09/arepas-colombianas.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipedSelected(recipe: Recipe): void {
    this.recipedWasSelected.emit(recipe)
  }

}
