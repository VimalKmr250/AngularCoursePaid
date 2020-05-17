import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeadderComponent} from './headder/headder.component';
import { RecipeComponent } from './recipie/recipe.component';
import { RecipieListComponent } from './recipie/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipie/recipie-list/recipie-item/recipie-item.component';
import { RecipieDetailComponent } from './recipie/recipie-detail/recipie-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    RecipeComponent,
    RecipieListComponent,
    RecipieItemComponent,
    RecipieDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
