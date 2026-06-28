import { Component } from '@angular/core';

import { Slide } from '@shared/components/slide/slide';
import { SlidesContainer } from '@shared/components/slides-container/slides-container';
import { Markdown } from '@shared/components/markdown/markdown';
import { SlideSet } from '@shared/directives/slide-set/slide-set';
import { A11yIcon } from '@shared/components/icons/a11y-icon/a11y-icon';
import { RemoveButtonBad } from './examples/remove-button-bad/remove-button-bad';
import { RemoveButtonEn } from './examples/en/remove-button/remove-button';
import { RemoveButtonRo } from './examples/ro/remove-button/remove-button';
import { TableOfContents } from 'app/shared/components/table-of-contents/table-of-contents';

@Component({
  selector: 'app-slide-set1',
  imports: [SlidesContainer, Slide, Markdown, TableOfContents],
  templateUrl: './slide-set1.html',
  styleUrl: './slide-set1.scss',
})
export class SlideSet1 extends SlideSet {
  override setName = 'sets.set1.slides';
  override components = [A11yIcon, RemoveButtonEn, RemoveButtonRo, RemoveButtonBad];
}
