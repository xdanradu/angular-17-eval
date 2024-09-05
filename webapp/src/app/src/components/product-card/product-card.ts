import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/state/cart.service';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'product-card',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './product-card.html',
  styleUrls: ['product-card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input()
  product: Product;

  cartService = inject(CartService);

  add() {
    this.cartService.add(this.product);
  }
}
