import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CurrentRouteService } from '@shared/services/current-route.service';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {
  currentRouteService = inject(CurrentRouteService);
  currentRoute = '';

  constructor() {
    this.currentRoute = this.currentRouteService.getCurrentRoute();
  }

}
