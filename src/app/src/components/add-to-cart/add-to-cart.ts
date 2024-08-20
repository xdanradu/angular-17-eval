import { Component } from '@angular/core';
import {SeoService} from "../../seo/seo.component";

@Component({
  standalone: true,
  selector: 'custom-add-to-cart',
  templateUrl: './add-to-cart.html',
  styleUrls: ['./add-to-cart.scss'],
  providers: [SeoService]
})
export class AddToCart {
  add(event: Event): void {
    event.stopPropagation();
    console.log('Add children');
  }
}
