import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogComponent} from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, ScullyLibModule
  ,
  RouterModule.forChild([
  {
    path: ':slug',
    component: BlogComponent
  }
  ]),
  ],
})
export class BlogModule {}
