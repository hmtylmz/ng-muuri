import {
    AfterViewInit, ChangeDetectionStrategy, Component, ContentChildren, ElementRef, HostBinding,
    Input, OnInit, QueryList, ViewChildren
} from '@angular/core';

import { NgMuuriItemComponent } from '../ng-muuri-item/ng-muuri-item.component';

@Component({
  selector: 'ng-muuri-grid',
  templateUrl: './ng-muuri-grid.component.html',
  styleUrls: ['./ng-muuri-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgMuuriGridComponent implements AfterViewInit {
  @Input('options') options: MuuriOptions;

  @ContentChildren(NgMuuriItemComponent) items !: QueryList<NgMuuriItemComponent>;
  @HostBinding('class') class = 'ng-muuri-grid';

  previousHostElements: Array<HTMLElement>;
  hostElement: HTMLElement;

  grid: Muuri;

  constructor(private elementRef: ElementRef) {
    this.hostElement = this.elementRef.nativeElement;
  }

  ngAfterViewInit() {
    this.grid = new Muuri(this.hostElement, this.options);
    this.previousHostElements = this.items
      .map((item: NgMuuriItemComponent) => item.hostElement);
    this.items.changes.subscribe(() => {
      this.itemsChanged();
    });
  }

  itemsChanged() {
    const newHostElements = this.items
      .map((item: NgMuuriItemComponent) => item.hostElement);
    const removeMuuriHostElements = this.previousHostElements.filter((element: HTMLElement) => !newHostElements.includes(element));
    const addMuuriHostElements = newHostElements.filter((element: HTMLElement) => !this.previousHostElements.includes(element));
    if (removeMuuriHostElements.length > 0) {
      this.grid.remove(removeMuuriHostElements);
    }
    if (addMuuriHostElements.length > 0) {
      this.grid.add(addMuuriHostElements);
    }
    this.previousHostElements = newHostElements;
  }
}

