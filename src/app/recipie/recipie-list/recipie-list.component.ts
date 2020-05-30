import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipieModel} from '../recipie.model';
import {RecipeService} from "../recipie.service";

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipieModel>();
  reicpes: RecipieModel[] = [];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.reicpes = this.recipeService.getRecipe();
  }
  onRecipeSelected(recipe: RecipieModel){
    this.recipeWasSelected.emit(recipe);
  }
}
