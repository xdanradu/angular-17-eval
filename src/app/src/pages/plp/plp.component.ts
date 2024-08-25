import {ChangeDetectionStrategy, Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {ProductCardComponent} from "../../components/product-card/product-card";
import { Product } from "../../models/product.model";
import { SeoDirective } from "../../services/seo/seo.directive";

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

  products: Product[] = [
    {id: '1', name: 'iPhone 11', price: 1000, src: 'products/iphone11.webp'},
    {id: '2', name: 'iPhone 12', price: 1200, src: 'products/iphone12.webp'},
    {id: '3', name: 'iPhone 13', price: 1300, src: 'products/iphone13.webp'}
  ];
}
