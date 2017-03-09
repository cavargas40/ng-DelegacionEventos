import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{title}}
    <br>
    <app-navigation></app-navigation>
    <button (click)="showObsComp = !showObsComp"> Mostrar Component Observador  </button>
    <div *ngIf='showObsComp'>
      <app-observing></app-observing>
    </div>
  `
})
export class AppComponent {
  title = 'Angular 2 - delegacion de eventos';
  showObsComp = true;
  constructor(){ console.clear(); }
}
