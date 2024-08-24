import { computed, Injectable, signal } from '@angular/core';
import { Product, CartItem } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<CartItem[]>([]);

  totalValue = computed(() =>
    this.items().reduce((sum, product) => sum + product.price, 0)
  );

  count = computed(() =>
    this.items().length
  );

  add(product: Product): void {
    this.items.update(items => {
        return [...items, product];
     });
  }

  remove(id: string): void {
    this.items.update(items => {
      return items.filter(item => item.id !== id)
   });
  }

  update(product: Product) {}
}
