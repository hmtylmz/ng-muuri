import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'ng-muuri-item',
  templateUrl: './ng-muuri-item.component.html',
  styleUrls: ['./ng-muuri-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgMuuriItemComponent implements OnInit {
  @HostBinding('class') class = 'ng-muuri-item';

  constructor() { }

  ngOnInit() {
  }

}
