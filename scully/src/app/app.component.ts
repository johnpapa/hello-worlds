import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{ value }}</div>
    <ul>
      <li *ngFor="let page of links$ | async">{{ page.route }}</li>
    </ul>`,
})
export class AppComponent implements OnInit {
  constructor(private scully: ScullyRoutesService) {}
  links$: Observable<any> = this.scully.available$;
  value = 'World';

  ngOnInit() {
    // debug current pages
    this.links$.subscribe((links) => {
      console.log(links);
    });
  }
}
