import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Http, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class LoginServiceService {

  private url: string = "http://localhost:3000/login";

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private authenticated = false;

  constructor(
    private router: Router,
    private http: Http) { }

  signIn(user: User) {
    let headers = new Headers(
      {
        'Content-Type': 'application/json; charset=utf-8'
      });
    let options = new RequestOptions({ headers: headers });
    console.log(user)
    console.log(this.url)
    this.http.post(this.url, user, options).toPromise()
    .then((res) => {
   
      console.log('API Response : ', res.json());
  
      if(true){
     
        console.log("entrei no signIn e autentiquei!")
   
   // if((user.email === 'user@mail.com') && user.password === '123456'){
      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['/home']);
       }
    
    
    }).catch((error) => {
      console.error('API Error : ', error.status);
      console.error('API Error : ', error.json());
      });
  
  }
  

  

  logout() {
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    //console.log("entrei no isAuthenticated()! ")
      return this.authenticated;
  }

  private showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
  }

}
