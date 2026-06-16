import { ApplicationRef, DOCUMENT, Injectable, Type, createComponent, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttachComponentService {
  applicationRef = inject(ApplicationRef);
  document = inject(DOCUMENT);

  attachComponent(component: Type<unknown>): void {
    const componentName = (component).name.slice(1);

    const hostElements = this.document.querySelectorAll<Element>(`.${componentName}`);

    const environmentInjector = this.applicationRef.injector;

    if (hostElements) {
      for (const hostElement of hostElements) {
        const componentRef = createComponent(component, { hostElement, environmentInjector });
        this.applicationRef.attachView(componentRef.hostView);
        componentRef.changeDetectorRef.detectChanges();
      }
    }
  }
}
