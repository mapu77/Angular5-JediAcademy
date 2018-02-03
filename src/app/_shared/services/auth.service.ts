import {Injectable} from '@angular/core';
import {CookieService} from 'ng2-cookies';
import {JwtHelper} from 'angular2-jwt';
import User from '../../_models/user.model';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class AuthService {
  private readonly cookieToken = 'api-token';
  private jwtHelper: JwtHelper;
  private readonly apiUrl = '/api';
  private readonly authPrefix = '/auth';

  constructor(private _cookieService: CookieService, private _http: HttpClient) {
    this.jwtHelper = new JwtHelper();
  }

  isLogged(): boolean {
    return false; // this._cookieService.check(this.cookieToken);
  }

  logOut() {
    this._cookieService.deleteAll();
  }

  decodeEmail(): string {
    const token = this._cookieService.get(this.cookieToken);
    console.log('jwtHelper');
    console.log(this.jwtHelper.decodeToken(token));
    return '';
  }

  logIn(user: User): Promise<any> {
    return this._http
      .post(this.apiUrl + this.authPrefix + '/login', {email: user.email, password: user.password})
      .toPromise();
  }

  signIn(user: User): Promise<any> {
    return this._http
      .post(this.apiUrl + this.authPrefix + '/signin', user)
      .toPromise();
  }
}
