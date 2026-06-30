import { Injectable } from '@angular/core';
import { State } from '@shared/models/state.model';

export const LOCAL_STORAGE_ITEM_NAME = 'tcSlidesSettings';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getLocalStorage(): State | null {
    if (typeof window != 'undefined') {
      const settings = localStorage.getItem(LOCAL_STORAGE_ITEM_NAME);
      if (settings !== null) {
        return JSON.parse(settings) as State;
      }
    }

    return null;
  }

  removeFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  setToLocalStorage(newSettings: State): void {
    if (newSettings !== null && typeof localStorage !== 'undefined') {
      const existingSettings = this.getLocalStorage();

      if (existingSettings !== null) {
        const updatedSettings = Object.assign(existingSettings, newSettings);
        localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify(updatedSettings));
      } else {
        localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify(newSettings));
      }
    }
  }
}
