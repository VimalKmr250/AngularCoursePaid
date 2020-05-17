import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[]  = [
    new IngredientModel('apple', 5),
    new IngredientModel('banana', 10),
    new IngredientModel('capsicum', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

}
