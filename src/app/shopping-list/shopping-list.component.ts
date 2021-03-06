import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientsChanges
      .subscribe(
      (ingredient: IngredientModel[])=>{
        this.ingredients = ingredient;
      }
    )
  }

}
