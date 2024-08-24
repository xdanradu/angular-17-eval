import { ChangeDetectionStrategy, Component } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  standalone: true,
  selector: 'auth',
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  constructor(private auth: AuthService) {
  }
  login(): void {
    console.log(this.auth.login('',''));
  }
}
