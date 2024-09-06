import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterceptorUtil, USE_CLIENT_TOKEN} from "../../services/auth/interceptor-utils";
import {User, UserLogin} from "../../models/product.model";

const CONTENT_TYPE_JSON_HEADER = { 'Content-Type': 'application/json' };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);

  login(user: UserLogin): Observable<any> {
    return this.http.post('http://localhost:3000/login', user);
  }

  getDetails(): Observable<User> {
    const url: string = 'http://localhost:3000/protected';
    let headers = new HttpHeaders({
      ...CONTENT_TYPE_JSON_HEADER,
    });
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);

    return this.http.get<User>(url, { headers });
  }
}
