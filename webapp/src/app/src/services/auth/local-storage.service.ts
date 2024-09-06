import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number;
  clear(): void {}
  getItem(_key: string): string | null {
    return null;
  }
  key(_index: number): string | null {
    return null;
  }
  removeItem(_key: string): void {}
  setItem(_key: string, _value: string): void {}
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements Storage {
  private storage: Storage;

  //@ts-ignore
  constructor(@Inject(PLATFORM_ID) platformId) {
    this.storage = new LocalStorage();


    if (isPlatformBrowser(platformId)) {
      this.storage = localStorage;
    }
  }

  length: number;

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }
}
