import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {

  constructor() { }

  //Observable NavItem Source
  private _navItemSource = new BehaviorSubject<number>(0);

  //Observable navItem stream
  public navItem$ = this._navItemSource.asObservable();

  //service command
  changeNav(number){
    this._navItemSource.next(number);
  }
}
