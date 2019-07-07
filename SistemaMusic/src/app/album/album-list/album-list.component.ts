import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  albuns: Album[] = [];

  ngOnInit() {
    this.albumService.getAll()
          .subscribe(data => this.albuns = data, err => {
            alert('Aconteceu um erro!');
          })
    this.albumService.albumchanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.albuns = data
      )
    );
    /*this.albuns = [{
        'codigo': 1,
        'titulo': 'Allegiance',
        'banda': 'As Blood Runs Black',
        'gravadora':'Mediaskare Records',
        'lancamento': '2006',
        'duracao': '37:04'
    }]*/
  }

}
