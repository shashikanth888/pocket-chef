import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just an example for recipe', 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_799,c_fill,g_auto,h_449,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160929101749-essential-spanish-dish-paella-phaidon.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
