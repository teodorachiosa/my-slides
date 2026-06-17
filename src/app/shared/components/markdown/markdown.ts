import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-markdown',
  imports: [SafeHtmlPipe],
  templateUrl: './markdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './markdown.scss',
})
export class Markdown {
  @Input() data = '';
}
