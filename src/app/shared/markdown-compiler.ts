import { Marked, MarkedExtension, Tokens } from 'marked';
import { markedHighlight, SynchronousOptions } from 'marked-highlight';
import hljs from 'highlight.js/lib/common';

const COMPONENT_NAME_REGEX = /<!--([^)]+)-->/g;

function md(input: TemplateStringsArray, ...args: unknown[]) {
  const value = String.raw(input, args);

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
        (_, componentName: string) => `<div class="${componentName} angular-component"></div>`,
      );
    },
    heading({ text, depth }: Tokens.Heading) {
      const id = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
      return `<h${depth} tabindex="-1" id="${depth === 1 ? 'slides-start' : id}">${text}</h${depth}>`;
    },
  };

  const highlightedMarked = new Marked<string, string>();
  highlightedMarked.use(highlightExtension, { renderer: customRenderer });

  return highlightedMarked.parse(value) as string;
}

export default md;
