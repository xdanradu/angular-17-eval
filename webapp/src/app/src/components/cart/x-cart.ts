import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { CartService } from '../../services/state/cart.service';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'x-cart',
  templateUrl: './x-cart.html',
  styleUrls: ['./x-cart.scss'],
  imports: [
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XCart {
  @ViewChild('circle') circleRef: ElementRef;

  cartService = inject(CartService);
  renderer = inject(Renderer2);

  constructor(){
    effect(() => {
      if(this.cartService.count()>0) {
        this.renderer['addClass'](this.circleRef.nativeElement, 'beat-animation');
        setTimeout(()=>this.renderer['removeClass'](this.circleRef.nativeElement, 'beat-animation'), 500);
      }
    });
  }
}
