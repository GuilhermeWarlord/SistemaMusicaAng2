import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { FormsModule } from '@angular/forms';
import { albumRouting } from './album.routing';
import { AlbumService } from './album.service';
import { AlbumFormComponent } from './album-form/album-form.component';
import { AlbumCrudComponent } from './album-crud/album-crud.component';
import { FilterPipe } from 'app/filter.pipe';

@NgModule({
  imports: [
    CommonModule,albumRouting,FormsModule
  ],
  declarations: [AlbumListComponent, AlbumFormComponent, AlbumCrudComponent, FilterPipe],
  providers: [AlbumService]
})
export class AlbumModule { }
