import {Component, Input, OnInit} from '@angular/core';
import {RecipieModel} from '../../recipie.model';
import {RecipeService} from "../../recipie.service";

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Input() reicpeRecieved: RecipieModel;

  constructor(private recipeService: RecipeService) {
  }
  ngOnInit(){
  }
  onSelectedItem(){
    this.recipeService.recipeSelected.emit(this.reicpeRecieved);
  }

}
