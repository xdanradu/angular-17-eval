import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html'
})
export class AddToCartComponent {
  addToCart(event: Event): void {
    console.log('Add to cart parent');
    event.preventDefault();
  }
}
