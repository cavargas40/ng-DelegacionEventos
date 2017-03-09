import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-observing',
  template: 
  `
    obs component, item: {{item}}
  `
})
export class ObservingComponent implements OnInit, OnDestroy {
  item: number;
  subscription: Subscription;

  constructor(private _navService: NavService) { }

  ngOnInit() {
    this.subscription = this._navService.navItem$
    .subscribe(item => this.item = item);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}