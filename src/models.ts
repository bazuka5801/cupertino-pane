export interface PaneBreaks {
  top?: {enabled: boolean, height?: number, offset?: number, timing?: string};
  middle?: {enabled: boolean, height?: number, offset?: number, timing?: string};
  bottom?: {enabled: boolean, height?: number, offset?: number, timing?: string};
}

export interface TransitionStartEvent {
  translateY: { new: number};
}

export interface Settings {
  initialBreak: ('top' | 'middle' | 'bottom');
  parentElement: any;
  followerElement: string;
  backdrop: boolean;
  backdropOpacity: number;
  animationDuration: number;
  bottomOffset: number,
  darkMode: boolean;
  bottomClose: boolean;
  freeMode: boolean;
  buttonClose: boolean;
  topperOverflow: boolean;
  topperOverflowOffset: number;
  lowerThanBottom: boolean;
  upperThanTop: boolean;
  showDraggable: boolean;
  draggableOver: boolean;
  clickBottomOpen: boolean;
  dragBy: string[];
  preventClicks: boolean;
  simulateTouch: boolean;
  passiveListeners: boolean;
  breaks: PaneBreaks;
  onDidDismiss: (event?: CustomEvent) => void,
  onWillDismiss: (event?: CustomEvent) => void,
  onDidPresent: (event?: CustomEvent) => void,
  onWillPresent: (event?: CustomEvent) => void,
  onDragStart: (event?: CustomEvent) => void,
  onDrag: (event?: CustomEvent) => void,
  onDragEnd: (event?: CustomEvent) => void,
  onBackdropTap: (event?: CustomEvent) => void,
  onTransitionStart: (event?: TransitionStartEvent) => void,
  onTransitionEnd: (event?: CustomEvent) => void
}