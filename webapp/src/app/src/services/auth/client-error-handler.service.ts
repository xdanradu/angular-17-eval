import {ClientToken, ClientTokenService} from "./client-token.service";
import {HttpHandler, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {switchMap, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ClientErrorHandlingService {
  constructor(protected clientTokenService: ClientTokenService) {}

  /**
   * Refreshes client token and retries the request with the new token.
   */
  public handleExpiredClientToken(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    return this.clientTokenService.refreshClientToken().pipe(
      take(1),
      switchMap((token: ClientToken) => {
        return next.handle(this.createNewRequestWithNewToken(request, token));
      })
    );
  }

  /**
   * Clones the requests and provided `Authorization` header.
   */
  protected createNewRequestWithNewToken(
    request: HttpRequest<any>,
    token: ClientToken
  ): HttpRequest<any> {
    request = request.clone({
      setHeaders: {
        Authorization: `${token.token_type || 'Bearer'} ${token.access_token}`,
      },
    });
    return request;
  }
}
