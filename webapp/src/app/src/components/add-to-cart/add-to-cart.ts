import { Component, Input } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  selector: 'custom-add-to-cart',
  templateUrl: './add-to-cart.html',
  styleUrls: ['./add-to-cart.scss']
})
export class AddToCart {
  @Input()
  product: Product;

  add(event: Event): void {


  }
}
