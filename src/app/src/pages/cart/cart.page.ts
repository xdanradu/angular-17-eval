import {ChangeDetectionStrategy, Component, effect, inject} from "@angular/core";
import { CartService } from "../../state/cart.service";
import { CartItem } from '../../models/product.model';

@Component({
  standalone: true,
  selector: 'cart-page',
  templateUrl: './cart.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
