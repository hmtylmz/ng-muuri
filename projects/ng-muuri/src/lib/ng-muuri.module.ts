import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgMuuriGridComponent } from './components/ng-muuri-grid/ng-muuri-grid.component';
import { NgMuuriItemComponent } from './components/ng-muuri-item/ng-muuri-item.component';

@NgModule({
  declarations: [NgMuuriGridComponent, NgMuuriItemComponent],
  imports: [
    CommonModule
  ],
  exports: [NgMuuriGridComponent, NgMuuriItemComponent]
})
export class NgMuuriModule { }
