export type Layout = 'fixed' | 'flexible';
export type Theme = 'light' | 'dark' | 'system';

export interface State {
  layout?: Layout;
  maxWidth?: number;
  theme?: Theme;
  isFullscreen?: boolean;
  currentSlide?: number;
  language?: string;
}
