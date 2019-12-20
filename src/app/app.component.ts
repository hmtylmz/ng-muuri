import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let Muuri: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-muuri';
  elements = [...Array(10).keys()];

  ngAfterViewInit(): void {
    var grid = new Muuri('.grid', {
      // Layout
      layout: {
        fillGaps: false,
        horizontal: false,
        alignRight: true,
        alignBottom: true,
        rounding: true
      },

      // Drag & Drop
      dragEnabled: true,
      dragContainer: null,
      dragStartPredicate: {
        distance: 0,
        delay: 0,
        handle: false
      },
      dragAxis: null,
      dragSort: true,
      dragSortHeuristics: {
        sortInterval: 100,
        minDragDistance: 10,
        minBounceBackAngle: 1
      },
      dragReleaseDuration: 300,
      dragReleaseEasing: 'ease',
      dragCssProps: {
        touchAction: 'none',
        userSelect: 'none',
        userDrag: 'none',
        tapHighlightColor: 'rgba(0, 0, 0, 0)',
        touchCallout: 'none',
        contentZooming: 'none'
      },
      dragPlaceholder: {
        enabled: false,
        duration: 300,
        easing: 'ease',
        createElement: null,
        onCreate: null,
        onRemove: null
      },
    });
  }
}
