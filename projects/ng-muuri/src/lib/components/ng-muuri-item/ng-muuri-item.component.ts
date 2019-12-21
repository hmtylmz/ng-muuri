import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'ng-muuri-item',
  templateUrl: './ng-muuri-item.component.html',
  styleUrls: ['./ng-muuri-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgMuuriItemComponent implements OnInit {
  @HostBinding('class') class = 'ng-muuri-item';

  hostElement: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.hostElement = this.elementRef.nativeElement;
  }

  ngOnInit() {
  }

}
