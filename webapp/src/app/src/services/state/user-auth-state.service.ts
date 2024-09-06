import { computed, Injectable, signal } from '@angular/core';
import { Product, CartItem } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<ClientToken[]>([]);

  add(product: Product): void {

  }

  remove(id: string): void {

  }

  update(product: Product, count: number) {}
}
