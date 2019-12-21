import {
    AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit
} from '@angular/core';

@Component({
  selector: 'ng-muuri-grid',
  templateUrl: './ng-muuri-grid.component.html',
  styleUrls: ['./ng-muuri-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgMuuriGridComponent implements AfterViewInit {
  @Input('options') options: MuuriOptions;
  @HostBinding('class') class = 'ng-muuri-grid';

  hostElement: HTMLElement;

  grid: Muuri;

  constructor(private elementRef: ElementRef) {
    this.hostElement = elementRef.nativeElement;
  }

  ngAfterViewInit() {
    this.grid = new Muuri(this.hostElement, this.options);
  }
}

