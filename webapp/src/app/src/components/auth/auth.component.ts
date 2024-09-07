import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AuthService} from "./auth.service";
import {FormsModule} from "@angular/forms";
import {LocalStorageService} from "../../services/auth/local-storage.service";
import {LOCAL_STORAGE_AUTH_KEY, UserAuth} from "../../models/product.model";
import { ClientTokenService } from '../../services/auth/client-token.service';


@Component({
  standalone: true,
  selector: 'auth',
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule
  ]
})
export class AuthComponent {
  username: string;
  password: string;

  auth = inject(AuthService);
  localStorage = inject(LocalStorageService);
  clientToken = inject(ClientTokenService);

  login(): void {
    this.auth.login({username: this.username, password: this.password}).subscribe((response: UserAuth)=> {
      console.log(response);
      this.clientToken.save(response.token); 
    });
  }

  getDetails(): void {
    this.auth.getDetails().subscribe((response)=> {
      console.log(response);
    });
  }
}
