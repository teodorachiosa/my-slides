import {
  Component,
  HostBinding,
  HostListener,
  inject,
  DOCUMENT,
  Renderer2,
  afterNextRender,
} from '@angular/core';
import { State } from '@shared/models/state.model';
import { StateService } from '@shared/services/state.service';

const INTERSECTION_RATIO_MORE_VISIBLE = 0.9;
const INTERSECTION_RATIO_LESS_VISIBLE = 0.6;

@Component({
  selector: 'app-slides-container',
  imports: [],
  templateUrl: './slides-container.html',
  styleUrl: './slides-container.scss',
})
export class SlidesContainer {
  stateService = inject(StateService);
  renderer = inject(Renderer2);
  document = inject(DOCUMENT);
  allSlides?: NodeListOf<HTMLElement>;
  state: State = {};
  currentSlide = 0;
  visibleIndices = new Set<number>();
  previousActiveHeading?: Element;

  constructor() {
    afterNextRender({
      read: () => {
        if (typeof this.document !== 'undefined') {
          this.allSlides = this.document.querySelectorAll('app-slide');
        }

        this.addSlideNumber();
        this.watchForCurrentSlide();
      },
    });
  }

  @HostBinding('style.width')
  get maxWidth() {
    return this.stateService.getState()().maxWidth && !this.stateService.getState()().isFullscreen
      ? `${this.stateService.getState()().maxWidth}%`
      : '100%';
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['ArrowRight', 'ArrowLeft', 'Home', 'End', 'PageUp', 'PageDown'];

    if (
      !this.allSlides ||
      this.stateService.getState()().layout === 'flexible' ||
      !this.stateService.getState()().isFullscreen ||
      !allowedKeys.includes(event.key)
    )
      return;

    event.preventDefault();
    this.currentSlide = this.stateService.getState()().currentSlide ?? 0;

    if (event.key === 'ArrowRight' || event.key === 'PageDown') {
      if (this.currentSlide < this.allSlides.length - 1) {
        this.currentSlide = this.currentSlide + 1;
      }
    }

    if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      if (this.currentSlide > 0) {
        this.currentSlide = this.currentSlide - 1;
      }
    }

    if (event.key === 'Home') {
      this.currentSlide = 0;
    }

    if (event.key === 'End') {
      this.currentSlide = this.allSlides.length - 1;
    }

    this.goToSlide(this.currentSlide);

    this.state.currentSlide = this.currentSlide;
    this.stateService.setState(this.state);
  }

  goToSlide(slideNumber: number): void {
    if (!this.allSlides) return;

    const nextSlide = this.allSlides[slideNumber];
    if (nextSlide) {
      nextSlide.focus();
    }

    this.state.currentSlide = slideNumber;
    this.stateService.setState(this.state);
  }

  addSlideNumber(): void {
    this.allSlides?.forEach((slide, index) => {
      if (typeof window === 'undefined') return;

      const span: HTMLElement = this.renderer.createElement('span');
      this.renderer.addClass(span, 'slide-number');
      this.renderer.setAttribute(span, 'aria-hidden', 'true');
      const text = this.renderer.createText(`${index + 1}`);
      this.renderer.appendChild(span, text);
      this.renderer.appendChild(slide, span);
    });
  }

  watchForCurrentSlide(): void {
    if (typeof window !== 'undefined') {
      const slidesObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const match = entry;
            const currentIndex = match.target.id.split('-')[1];

            if (entry.isIntersecting) {
              this.visibleIndices.add(Number(currentIndex) - 1);
            } else {
              this.visibleIndices.delete(Number(currentIndex) - 1);
            }
          }

          let middleIndex;

          if (this.visibleIndices.has(0)) {
            middleIndex = 0;
          } else if (this.allSlides && this.visibleIndices.has(this.allSlides.length - 1)) {
            middleIndex = this.allSlides.length - 1;
          } else {
            middleIndex = Math.floor(this.average(this.visibleIndices));
          }

          this.currentSlide = middleIndex;
          this.state.currentSlide = this.currentSlide;
          this.stateService.setState(this.state);

          if (typeof this.allSlides !== 'undefined') {
            this.rememberActiveHeading(this.allSlides[this.currentSlide]);
          }
        },
        {
          threshold: [INTERSECTION_RATIO_MORE_VISIBLE, INTERSECTION_RATIO_LESS_VISIBLE],
        },
      );

      this.allSlides?.forEach((slide) => {
        slidesObserver.observe(slide);
      });
    }
  }

  average(numbers: Set<number>): number {
    const numbersArray = Array.from(numbers);

    let total = 0;
    for (const number of numbersArray) {
      total += number;
    }

    return total / numbersArray.length;
  }

  rememberActiveHeading(element: HTMLElement): void {
    const newActiveHeading = element?.querySelector('h1,h2,h3,h4,h5,h6');

    if (newActiveHeading !== null) {
      this.state.activeHeading = newActiveHeading;
      this.previousActiveHeading = newActiveHeading;
    } else {
      this.state.activeHeading = this.previousActiveHeading;
    }

    this.stateService.setState(this.state);
  }
}
