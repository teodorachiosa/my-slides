import { DOCUMENT, inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

const CLEAR_NOTIFICATIONS_DELAY = 2000;

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  document = inject(DOCUMENT);
  rendererFactory = inject(RendererFactory2);
  renderer: Renderer2;

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  notify(message: string): void {
    const notificationContainer = this.document.getElementById('live-updates-container');
    const spanElement: HTMLSpanElement = this.renderer.createElement('span');

    const text = this.renderer.createText(message);
    this.renderer.appendChild(spanElement, text);

    this.renderer.appendChild(notificationContainer, spanElement);

    /* Remove message after 2 seconds */
    setTimeout(() => {
      this.renderer.removeChild(notificationContainer, spanElement);
    }, CLEAR_NOTIFICATIONS_DELAY);
  }
}
