import {inject, Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {LOCAL_STORAGE_AUTH_KEY} from "../../models/product.model";

export interface ClientAuthState {
  clientToken: ClientToken;
}

export interface ClientToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}



@Injectable({
  providedIn: 'root',
})
export class ClientTokenService {

  localStorage = inject(LocalStorageService);

  /**
   * Returns a client token. The client token from the store is returned if there is one.
   * Otherwise a new token is fetched from the backend and saved in the store.
   */
  getClientToken(): string | undefined {

    if (this.localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) {
      return this.localStorage.getItem(LOCAL_STORAGE_AUTH_KEY) as string;
    } else {
      // load client token from BE
      console.log('redirect to login, oauth, 3rd party auth service');
      return undefined;
    }
  }

  /**
   * Fetches a clientToken from the backend and saves it in the store where getClientToken can use it.
   * The new clientToken is returned.
   */
  refreshClientToken(): Observable<ClientToken | null> {
    return of(null);
  }

  save(token: string) {
    this.localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, token);
  }
}
