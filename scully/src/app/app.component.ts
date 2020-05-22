import { ScullyLibModule, ScullyRoutesService } from '@scullyio/ng-lib';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value = 'World';
  constructor(
    private scullySvc: ScullyRoutesService
  ) {
  }

  ngOnInit() {
    this.scullySvc.available$.subscribe(content => console.log(content));
  }
}
