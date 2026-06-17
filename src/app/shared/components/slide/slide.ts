import { Component, HostBinding, inject } from '@angular/core';
import { StateService } from '@shared/services/state.service';

@Component({
  selector: 'app-slide',
  imports: [],
  templateUrl: './slide.html',
  styleUrl: './slide.scss',
})
export class Slide {
  stateService = inject(StateService);

  @HostBinding('attr.role')
  slideRole = 'article';

  /* Allow programmatic focus in fullscreen mode (for keyboard interaction) */
  @HostBinding('attr.tabindex')
  get tabindex() {
    return this.stateService.getState().view === 'web' || !this.stateService.getState().isFullscreen
      ? null
      : '-1';
  }

  @HostBinding('style.boxShadow')
  get boxShadow() {
    return this.stateService.getState().isFullscreen
      ? 'none'
      : '0 0 var(--shadow-spread) 0 var(--shadow-color)';
  }
}
