import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {ClientTokenService} from "../services/auth/client-token.service";
import {InterceptorUtil, USE_CLIENT_TOKEN} from "../services/auth/interceptor-utils";

/**
 * Interceptor for handling requests with `USE_CLIENT_TOKEN` header.
 * Provides `Authorization` header with client token and handles errors related to client auth.
 */
@Injectable({ providedIn: 'root' })
export class ClientTokenInterceptor implements HttpInterceptor {

  clientToken = inject(ClientTokenService);
/*
  constructor(
    protected clientTokenService: ClientTokenService,
    protected clientErrorHandlingService: ClientErrorHandlingService,
  ) {}
*/
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Intercept client token request and append token to it');

    const isProtectedRequest = this.isProtectedRequest(request);
    if (isProtectedRequest) {
      console.log(request);
      request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);

      const token = this.clientToken.getClientToken();
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
    }

    return next.handle(request);
/*
    return this.getClientToken(isClientTokenRequest).pipe(
      take(1),
      switchMap((token: ClientToken | undefined) => {
        if (
          token?.access_token &&
          request.url.includes('')
        ) {
          request = request.clone({
            setHeaders: {
              Authorization: `${token.token_type || 'Bearer'} ${
                token.access_token
              }`,
            },
          });
        }

        return next.handle(request).pipe(
          catchError((errResponse: any) => {
            if (
              errResponse instanceof HttpErrorResponse &&
              errResponse.status === 401 &&
              isClientTokenRequest &&
              this.isExpiredToken(errResponse)
            ) {
              return this.clientErrorHandlingService.handleExpiredClientToken(
                request,
                next
              );
            }
            throw errResponse;
          })
        );
      })
    );*/
  }
/*
  protected getClientToken(
    isClientTokenRequest: boolean
  ): Observable<ClientToken | undefined> {
    if (isClientTokenRequest) {
      return of(undefined); // this.clientTokenService.getClientToken();
    }
    return of(undefined);
  }



  protected isExpiredToken(resp: HttpErrorResponse): boolean {
    return resp.error?.errors?.[0]?.type === 'InvalidTokenError';
  }*/


  protected isProtectedRequest(request: HttpRequest<any>): boolean {
    const isRequestMapping = InterceptorUtil.getInterceptorParam(
      USE_CLIENT_TOKEN,
      request.headers
    );
    return Boolean(isRequestMapping);
  }
}
