import { Injectable, EventEmitter } from '@angular/core';
import { Banda } from './banda';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
    
@Injectable()
export class BandaService {

  private x;
  private url: string = "http://localhost:3000/bandas";

  bandachanged = new EventEmitter<Observable<Banda[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Banda[]>{
    return this.http.get(this.url)
              .map(res => res.json())
              .catch(this.handleError); 
  
  }

  private handleError(error: any){
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro',error);
    return Observable.throw(erro);

  }

  add(banda: Banda){
    return this.http.post(this.url,JSON.stringify(banda),
    {headers: this.getHeaders()})
    .do(data => this.bandachanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number){
    return this.http.delete(this.getUrl(id), {headers: this.getHeaders()})
    .map(res => res.json())
    .do(data => this.bandachanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return headers;
  }

  private getUrl(id: number){
    return `${this.url}/${id}`;
  }

  update(banda: Banda){
    return this.http.put(this.url,JSON.stringify(banda),
    {headers: this.getHeaders()})
    .do(data => this.bandachanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  get(id: number){
    return this.getAll()
    .map((list: any) => list.find(banda => banda.codigo == id))
    .catch(this.handleError);
  }
}
