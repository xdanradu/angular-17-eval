import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(user: string, password:string): boolean {
    return true;
  }
}
