import { Component } from '@angular/core';

import { Slide } from '@shared/components/slide/slide';
import { SlidesContainer } from '@shared/components/slides-container/slides-container';
import { Presentation } from '@shared/components/presentation/presentation';
import { Markdown } from '@shared/components/markdown/markdown';
import { A11yIcon } from '@shared/components/icons/a11y-icon/a11y-icon';
import { RemoveButtonBad } from './examples/remove-button-bad/remove-button-bad';
import { RemoveButton } from './examples/remove-button/remove-button';
import { TableOfContents } from 'app/shared/components/table-of-contents/table-of-contents';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-web-a11y-for-everyone',
  imports: [SlidesContainer, Slide, Markdown, TableOfContents, TranslatePipe],
  templateUrl: './web-a11y-for-everyone.html',
  styleUrl: './web-a11y-for-everyone.scss',
})
export class WebA11yForEveryone extends Presentation {
  override setName = 'presentations.webA11yForEveryone.slides';
  override components = [A11yIcon, RemoveButton, RemoveButtonBad];
}
