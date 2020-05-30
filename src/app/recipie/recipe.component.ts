import { Component, OnInit } from '@angular/core';
import {RecipieModel} from "./recipie.model";
import {RecipeService} from "./recipie.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  selectedRecipe: RecipieModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: RecipieModel)=>{
        this.selectedRecipe = recipe;
      }
    )
  }

}
