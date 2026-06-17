import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CurrentRouteService } from '@shared/services/current-route.service';

@Component({
  selector: 'app-not-found',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './not-found.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './not-found.scss',
})
export class NotFound implements OnInit {
  currentRouteService = inject(CurrentRouteService);
  currentRoute = '';

  ngOnInit() {
    this.currentRoute = this.currentRouteService.getCurrentRoute();
  }
}
