import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipesl: Recipe;
  @Output() recipeSelected = new EventEmitter <{void}>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(): void{
   this.recipeSelected.emit();
  }

}
