import {ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {ProductCardComponent} from "../../components/product-card/product-card";
import { Product } from "../../models/product.model";
import { SeoDirective } from "../../services/seo/seo.directive";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/state/cart.service";

@Component({
  standalone: true,
  selector: 'pdp-page',
  imports: [
    NgOptimizedImage,
    SeoDirective
  ],
  providers: [ ProductService ],
  templateUrl: './pdp.component.html',
  styleUrls: ['pdp.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdpComponent implements OnInit {

  productService = inject(ProductService);
  cartService = inject(CartService);
  product: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id') || '';
    console.log(productId);
    this.product = this.productService.getProduct(productId);
  }

  add(product: Product) {
    this.cartService.add(product);
  }
}
