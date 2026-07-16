import { Injectable, signal, WritableSignal } from '@angular/core';

import { State } from '@shared/models/state.model';

const DEFAULT_STATE: State = {
  layout: 'fixed',
  width: 70,
  language: 'en',
  isFullscreen: false,
  currentSlide: 0
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state: WritableSignal<State> = signal(DEFAULT_STATE);

  getState(): WritableSignal<State> {
    return this.state;
  }

  setState(newState: State): void {
    this.state.set({ ...this.state(), ...newState });
  }
}
