import { Recipe } from './../recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe test', 'Simple Description', 'https://c.pxhere.com/images/92/6d/1fcf04d9135a513521818664d831-1583323.jpg!d')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
