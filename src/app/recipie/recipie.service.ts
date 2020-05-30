import {EventEmitter, Injectable} from "@angular/core";

import {RecipieModel} from "./recipie.model";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
   recipeSelected = new EventEmitter<RecipieModel>();

   constructor(private shoppingListService: ShoppingListService) {
   }
  private recicpes: RecipieModel[] = [
    new RecipieModel(
      'Chicken Briyani',
      'anjapar',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/hyderabadi-biryani-recipe-500x500.jpg',
     [new IngredientModel('rice',1),
                new IngredientModel('chicken',2)]),
    new RecipieModel(
      'MutonBriyani',
      'anjapar',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/hyderabadi-biryani-recipe-500x500.jpg',
      [new IngredientModel('rice',1),
        new IngredientModel('Mutton',2)]),
  ];

  getRecipe(){
    return this.recicpes.slice();
  }

  addIngredientsToshoppingList(ingredients: IngredientModel[]){
      this.shoppingListService.onIngredientsAdded(ingredients);
  }
}

