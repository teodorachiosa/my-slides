export type View = 'web' | 'slide';
export type Theme = 'light' | 'dark' | 'system'

export interface State {
  view?: View;
  maxWidth?: number;
  theme?: Theme;
  isFullscreen?: boolean;
  currentSlide?: number;
  language?: string;
}
