import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameIngredient', {static: false}) nameIngredientRef: ElementRef;
  @ViewChild('numberIngredient', {static: false}) numberIngredientRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
      const name = this.nameIngredientRef.nativeElement.value;
      const amount = this.numberIngredientRef.nativeElement.value;
      const newIngredient = new IngredientModel(name, amount);
      this.shoppingListService.onAddIngredient(newIngredient);
  }
}
