import {Component, Input, OnInit} from '@angular/core';
import {RecipieModel} from '../recipie.model';
import {RecipeService} from "../recipie.service";

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  @Input() selectedReicpeRecieved: RecipieModel;
  constructor(private  recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToshoppingList(this.selectedReicpeRecieved.ingredients)
  }

}
