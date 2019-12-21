import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  elements = [...Array(10).keys()];

  options: MuuriOptions = {
    // Layout
    layout: {
      fillGaps: false,
      horizontal: false,
      alignRight: false,
      alignBottom: false,
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
  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.elements.push(20);
      setTimeout(() => {
        this.elements.shift();
      }, 1000);
    }, 1000);
  }
}
