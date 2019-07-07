import { Routes, RouterModule } from '@angular/router'
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumFormComponent } from './album-form/album-form.component';
import { AlbumCrudComponent } from './album-crud/album-crud.component';

const ALBUM_ROUTES: Routes = [
    {
        path: '', component: AlbumCrudComponent
    },
    {
        path: ':id', component: AlbumCrudComponent
    }
];
export const albumRouting = RouterModule.forChild(ALBUM_ROUTES);