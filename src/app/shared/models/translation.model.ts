export interface TranslatedSlideSet {
  title?: string;
  slides?: TranslatedSlide[];
}

export interface TranslatedSlide {
  backgroundColor?: string;
  content: string;
}
