import { Component, Input } from '@angular/core';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-markdown',
  imports: [SafeHtmlPipe],
  templateUrl: './markdown.html',
  styleUrl: './markdown.scss',
})
export class Markdown {
  @Input() data: string = '';
}
