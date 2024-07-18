import {Component} from "@angular/core";
import {CustomAddToCartComponent} from "../../custom-add-to-cart.component";

@Component({
  standalone: true,
  selector: 'cart-page',
  imports: [
    CustomAddToCartComponent
  ],
  templateUrl: './plp.component.html',
  styleUrls: ['plp.scss']
})
export class PlpComponent {}
