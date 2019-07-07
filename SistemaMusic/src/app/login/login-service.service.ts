import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class LoginServiceService {

  private url: string = 'http://localhost:4200/login';

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private authenticated = false;

  constructor(
    private router: Router,
    private http: Http) { }

  signIn(user: User) {
    let logged = false;
    let headers = new Headers(
      {
        'Content-Type': 'application/json; charset=utf-8'
      });
    let options = new RequestOptions({ headers: headers });

    console.log(user);
    this.http.post(this.url, user, options).toPromise()
      .then((res) => {
        console.log('API Response : ', res.json());
        //console.log(res.json().msgUsuario);
        if (res.json().msgUsuario == "Usuario logado!") {
          logged = true;
          this.login(logged);
        }
      })
      .catch((error) => {
        console.error('API Error : ', error.status);
        console.error('API Error : ', error.json().msgUsuario);
      });
  }

  login(logged) {
    if (logged) {
      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['home']);
    } else {
      this.authenticated = false;
    }
  }

  logout() {
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
      return this.authenticated;
  }

  private showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
  }

}
