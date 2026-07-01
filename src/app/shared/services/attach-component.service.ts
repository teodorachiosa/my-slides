import { ApplicationRef, DOCUMENT, Injectable, Type, createComponent, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttachComponentService {
  applicationRef = inject(ApplicationRef);
  document = inject(DOCUMENT);

  attachComponent(component: Type<unknown>): void {
    const componentName = component.name.slice(1);
    if (!componentName) return;

    const hostElements = Array.from(this.document.querySelectorAll<Element>(`.${componentName}`));

    const environmentInjector = this.applicationRef.injector;

    for (const hostElement of hostElements) {
      const componentRef = createComponent(component, { hostElement, environmentInjector });
      this.applicationRef.attachView(componentRef.hostView);
      componentRef.changeDetectorRef.detectChanges();
    }
  }
}
