declare class Muuri {
  constructor(selector: string, options?: MuuriOptions);
}

declare class MuuriOptions {
  // Item elements
  items?: string;

  // Default show animation
  showDuration?: number;
  showEasing?: string;

  // Default hide animation
  hideDuration?: number;
  hideEasing?: string;

  // Item's visible/hidden state styles
  visibleStyles?: object;
  hiddenStyles?: object;

  // Layout
  layout?: MuuriLayoutOptions;
  layoutOnResize?: number;
  layoutOnInit?: boolean;
  layoutDuration?: number;
  layoutEasing?: string;

  // Sorting
  sortData?: object;

  // Drag & Drop
  dragEnabled?: boolean;
  dragContainer?: object;
  dragStartPredicate?: object;
  dragAxis?: object;
  dragSort?: boolean;
  dragSortHeuristics?: object;
  dragSortPredicate?: object;
  dragReleaseDuration?: number;
  dragReleaseEasing?: string;
  dragCssProps?: object;
  dragPlaceholder?: object;

  // Classnames
  containerClass?: string;
  itemClass?: string;
  itemVisibleClass?: string;
  itemHiddenClass?: string;
  itemPositioningClass?: string;
  itemDraggingClass?: string;
  itemReleasingClass?: string;
  itemPlaceholderClass?: string;
}

declare class MuuriLayoutOptions{
  fillGaps: boolean;
  horizontal: boolean;
  alignRight: boolean;
  alignBottom: boolean;
  rounding: boolean;
}
