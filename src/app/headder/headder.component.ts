import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.html',
  styleUrls: ['./headder.css']
})

export class  HeadderComponent {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}
