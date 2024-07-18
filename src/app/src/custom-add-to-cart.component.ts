import { Component } from '@angular/core';
import {AddToCartComponent} from "./add-to-cart.component";
import {AuthComponent} from "./auth/auth.component";
import {SeoService} from "./seo/seo.component";

@Component({
  standalone: true,
  selector: 'custom-add-to-cart',
  templateUrl: './custom-add-to-cart.component.html',
  styleUrls: ['./custom-add-to-cart.component.scss'],
  imports: [AuthComponent],
  providers: [SeoService]
})
export class CustomAddToCartComponent extends AddToCartComponent{
  add(event: Event): void {
    event.stopPropagation();
    // event.preventDefault();
    console.log('Add children');
  }
}
