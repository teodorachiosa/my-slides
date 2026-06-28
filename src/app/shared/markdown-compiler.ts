/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Injectable } from '@angular/core';
import { TranslateCompiler } from '@ngx-translate/core';
import { Marked, MarkedExtension, Tokens } from 'marked';
import { markedHighlight, SynchronousOptions } from 'marked-highlight';
import hljs from 'highlight.js/lib/common';

const COMPONENT_NAME_REGEX = /<!--([^)]+)-->/g;

@Injectable()
export class MarkdownCompiler extends TranslateCompiler {
  compile(value: string, _: string): string {
    if (typeof value !== 'string') {
      return value;
    }

    switch (true) {
      case value.startsWith('\\'):
        return value.split('\\')[1];
      default: {
        const highlightOptions: SynchronousOptions = {
          emptyLangClass: 'hljs',
          langPrefix: 'hljs language-',
          highlight(code: string, language: string) {
            return language
              ? hljs.highlight(code, { language: language }).value
              : hljs.highlightAuto(code).value;
          },
        };

        const highlightExtension: MarkedExtension = markedHighlight(highlightOptions);

        const customRenderer = {
          html({ text }: Tokens.HTML | Tokens.Tag): string {
            return text.replace(
              COMPONENT_NAME_REGEX,
              (_, componentName: string) =>
                `<div class="${componentName} angular-component"></div>`,
            );
          },
          heading({ text, depth }: Tokens.Heading) {
            const id = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
            return `<h${depth} id="${id}">${text}</h${depth}>`;
          },
        };

        const highlightedMarked = new Marked<string, string>();
        highlightedMarked.use(highlightExtension, { renderer: customRenderer });

        return highlightedMarked.parse(value) as string;
      }
    }
  }

  compileTranslations(translations: any, lang: string): any {
    const compiled = this.compileNestedTranslations(translations, lang);
    return compiled;
  }

  compileNestedTranslations(translations: any, lang: string): any {
    const compiled: any = {};

    for (const key in translations) {
      if (translations.hasOwnProperty(key)) {
        const value = translations[key];
        if (typeof value === 'object' && value !== null) {
          compiled[key] = this.compileNestedTranslations(value, lang);
        } else {
          compiled[key] = this.compile(value, lang);
        }
      }
    }

    return compiled;
  }
}
