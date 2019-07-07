import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {

  private albumIndex: number;
  private isNew: boolean = true;
  private album: Album;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService) { }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false;
          this.albumIndex = params['id'];
          this.albumIndex = +params['id'];
          this.albumService.get(this.albumIndex)
          .subscribe(data => this.album = data);  
        }else{
          this.isNew = true;
        }
      }
    );
  }

  novo(){
    this.album = new Album();
  }

  salvar(){
    let result;
    if(this.isNew){
      result = this.albumService.add(this.album);
    } else {
      result = this.albumService.update(this.album);
    }
    this.novo();
    
    this.voltar();
    result.subscribe(data => alert('sucesso'+data),
    err => {
      alert("An Erros Occurred. "+err);
    });
  }
  excluir(){
    if(this.album.codigo == null){
      alert("Selecione algum album");
    }else{
      if(confirm("Voce realemte deseja excluir o album "+this.album.titulo +" ?"))
        this.albumService.remove(this.album.codigo)
        .subscribe(
          data => this.novo,
          err =>{
            alert("Cliente não removido! ");
          }
      );
      this.novo();
      this.voltar();
    }
  }
  cancelar(){
    this.voltar();
  }

  voltar(){
    this.router.navigate(['/album']);
  }
}
