import { Injectable, EventEmitter } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Album } from './album';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class AlbumService {

  private url: string = "http://localhost:8080/album";

  albumchanged = new EventEmitter<Observable<Album[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Album[]>{
    return this.http.get(this.url)
              .map(res => res.json())
              .catch(this.handleError); 
  
  }

  private handleError(error: any){
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro',error);
    return Observable.throw(erro);

  }

  add(album: Album){
    return this.http.post(this.url,JSON.stringify(album),
    {headers: this.getHeaders()})
    .do(data => this.albumchanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number){
    return this.http.delete(this.getUrl(id), {headers: this.getHeaders()})
    .map(res => res.json())
    .do(data => this.albumchanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return headers;
  }

  private getUrl(id: number){
    return '${this.url}/${id}';
  }

  update(album: Album){
    return this.http.put(this.url,JSON.stringify(album),
    {headers: this.getHeaders()})
    .do(data => this.albumchanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  get(id: number){
    return this.getAll()
    .map((list: any) => list.find(album => album.codigo == id))
    .catch(this.handleError);
  }
}
