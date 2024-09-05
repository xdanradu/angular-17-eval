import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { XCart } from '../../components/cart/x-cart';

@Component({
  standalone: true,
  selector: 'est-header',
  imports: [RouterLink, XCart],
  templateUrl: './est-header.component.html',
  styleUrls: ['./est-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstHeader {}
