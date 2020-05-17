import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCoursePaid';
  featureLoaded = 'recipe';
  onNavigate(feature: string){
    this.featureLoaded = feature;
  }
}

