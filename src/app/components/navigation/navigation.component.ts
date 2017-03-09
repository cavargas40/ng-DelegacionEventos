import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="nav-item" (click)="selectedNavItem(1)">nav 1 (click me)</div>
    <div class="nav-item" (click)="selectedNavItem(2)">nav 2 (click me)</div>
  `
})
export class NavigationComponent {
  item: number;  
  constructor(private _navService:NavService) { }

  selectedNavItem(item: number){
    console.log('selected nav item '+ item);
    this._navService.changeNav(item);
  }
}
