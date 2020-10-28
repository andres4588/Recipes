import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipesl: Recipe;
 
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(): void{
    this.recipeService.recipeSelected.emit(this.recipesl)
  }

}
