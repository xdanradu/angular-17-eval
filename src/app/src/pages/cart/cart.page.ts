import {ChangeDetectionStrategy, Component, effect, inject} from "@angular/core";
import { CartService } from "../../services/state/cart.service";
import { CartItem } from '../../models/product.model';
import { SeoDirective } from "../../services/seo/seo.directive";
import { NgOptimizedImage } from "@angular/common";

@Component({
  standalone: true,
  selector: 'cart-page',
  templateUrl: './cart.page.html',
  styleUrls: ['./x-cart-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports:[SeoDirective, NgOptimizedImage]
})
export class CartPageComponent {
  
  cartService = inject(CartService);

  constructor(){
    effect(() => {

    });
  }

  remove(item: CartItem) {
    this.cartService.remove(item.id);
  }
}
