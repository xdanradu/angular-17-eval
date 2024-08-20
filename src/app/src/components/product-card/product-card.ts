import {Component, Input} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {AddToCart} from "../add-to-cart/add-to-cart";

@Component({
  standalone: true,
  selector: 'product-card',
  imports: [
    NgOptimizedImage,
    AddToCart
  ],
  templateUrl: './product-card.html',
  styleUrls: ['product-card.scss']
})
export class ProductCardComponent {
  @Input()
  product: any;
}
