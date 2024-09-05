import {ChangeDetectionStrategy, Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {ProductCardComponent} from "../../components/product-card/product-card";
import { Product } from "../../models/product.model";
import { SeoDirective } from "../../services/seo/seo.directive";
import {mockProducts} from "../../services/state/mock-products";

@Component({
  standalone: true,
  selector: 'plp-page',
  imports: [
    NgOptimizedImage,
    ProductCardComponent,
    SeoDirective
  ],
  templateUrl: './plp.component.html',
  styleUrls: ['plp.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlpComponent {

  products: Product[] = mockProducts;
}
