import {
  AfterViewInit,
  Component,
  DOCUMENT,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import {
  RouterLink,
  RouterOutlet,
  Router,
  NavigationEnd,
  ActivatedRoute,
  Scroll,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { StateService } from '@shared/services/state.service';
import { Header } from '@layout/header/header';
import { CurrentRouteService } from '@shared/services/current-route.service';
import { State } from './shared/models/state.model';

/* When skipping to headings, the focused element goes underneath the header element.
This values is used as a scroll offset from the top */
const ANCHOR_SCROLL_OFFSET = 250;

@Component({
  selector: 'app-root',
  imports: [Header, RouterLink, RouterOutlet, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  document = inject(DOCUMENT);
  translateService = inject(TranslateService);
  stateService = inject(StateService);
  state: WritableSignal<State> = signal({});
  viewportScroller = inject(ViewportScroller);
  titleService = inject(Title);
  currentRouteService = inject(CurrentRouteService);
  routerEventsSubscription: Subscription = Subscription.EMPTY;
  languageChangeSubscription: Subscription = Subscription.EMPTY;
  mainHeading?: HTMLHeadingElement;
  previousUrlNoFragment?: string;
  pageTitle = '';
  currentRoute = '';

  ngOnInit() {
    this.translateService.setFallbackLang('en');
    this.state = this.stateService.getState();
  }

  ngAfterViewInit(): void {
    this.routerEventsSubscription = this.router.events.subscribe((navigationEvent) => {
      if (navigationEvent instanceof NavigationEnd) {
        this.onRouteChange();

        this.languageChangeSubscription = this.translateService.onLangChange.subscribe(() => {
          this.onRouteChange();
        });
      }

      /* Angular bug: https://github.com/angular/angular/issues/55383
      Viewport Scroller is used because Angular doesn't take into account CSS solutions such as "scroll-margin-top". */
      if (navigationEvent instanceof Scroll) {
        const element = this.document.querySelector(`#${navigationEvent.anchor}`);

        if (element) {
          this.viewportScroller.setOffset([0, ANCHOR_SCROLL_OFFSET]);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
    this.languageChangeSubscription.unsubscribe();
  }

  onRouteChange(): void {
    this.setPageTitle();
    this.currentRoute = this.currentRouteService.getCurrentRoute();
  }

  setPageTitle(): void {
    this.pageTitle = this.getPageTitle();
    this.titleService.setTitle(this.pageTitle);
  }

  getPageTitle(): string {
    return `${this.translateService.instant(this.activatedRoute.firstChild?.snapshot.data['title'] ?? '.')} - ${this.translateService.instant('ui.siteTitle')}`;
  }
}
