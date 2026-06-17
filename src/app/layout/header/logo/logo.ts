import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CurrentRouteService } from '@shared/services/current-route.service';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './logo.scss',
})
export class Logo {
  currentRouteService = inject(CurrentRouteService);
  currentRoute = '';

  constructor() {
    this.currentRoute = this.currentRouteService.getCurrentRoute();
  }
}
