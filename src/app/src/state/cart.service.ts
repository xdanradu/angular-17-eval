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

  count = computed(() => [...this.items()].length);

  add(product: Product): void {
    this.items.update((items: CartItem[]) => {
        const exists = items.filter((item) => item.id === product.id);
        if(exists.length) {
          return [...items.map((item: CartItem) =>
            product.id === item.id
              ? { ...item, count: item.count + 1 }
              : { ...item }
          )
          ]
        }
        return [...items, { ...product, count: 1 }];
    });
  }

  remove(id: string): void {
    this.items.update((items) => {
      return [...items.filter((item) => item.id !== id)];
    });
  }

  update(product: Product, count: number) {}
}
