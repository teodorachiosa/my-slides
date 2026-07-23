export interface TranslatedPresentation {
  title?: string;
  examples?: Record<string, string>;
  slides?: TranslatedSlide[];
}

export interface TranslatedSlide {
  backgroundColor?: string;
  content: string;
}
