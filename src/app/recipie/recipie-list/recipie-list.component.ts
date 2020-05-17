import { Component, OnInit } from '@angular/core';
import {RecipieModel} from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  reicpe: RecipieModel[] = [
    new RecipieModel('briyani', 'anjapar', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/hyderabadi-biryani-recipe-500x500.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
