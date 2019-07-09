import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  constructor(private bandaService: BandaService) { }

  bandas: Banda[] = [];

  ngOnInit() {
    this.bandaService.getAll()
          .subscribe(data => this.bandas = data, err => {
            alert('Aconteceu um erro!');
          })
    this.bandaService.bandachanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.bandas = data
      )
    );
  }
}
