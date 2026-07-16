export type Layout = 'fixed' | 'flexible';
export type Theme = 'light' | 'dark' | 'system';

export interface State {
  layout?: Layout;
  width?: number;
  theme?: Theme;
  isFullscreen?: boolean;
  language?: string;
  currentSlide?: number;
  activeHeading?: Element;
  activeElement?: Element;
}
