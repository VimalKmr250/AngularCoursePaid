import {IngredientModel} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{
  ingredientsChanges = new EventEmitter<IngredientModel[]>()
  private ingredients: IngredientModel[] = [ new IngredientModel('apple', 5),
    new IngredientModel('banana', 10),
    new IngredientModel('capsicum', 10)];

  getIngredients(){
    return this.ingredients.slice();
  }
  onAddIngredient(ingredient: IngredientModel){
    this.ingredients.push(ingredient);
    this.ingredientsChanges.emit(this.ingredients.slice())
  }
  onIngredientsAdded(ingredients: IngredientModel[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanges.emit(this.ingredients.slice())
  }
}
