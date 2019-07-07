import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/login-guard';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
    ,
    { 
        path: 'album',
        loadChildren: 'app/album/album.module#AlbumModule',
        canActivate: [AuthGuard]
    },
    {   
        path: 'singin',
        component: LoginComponent

    }
   
];

export const RoutingModule = RouterModule.forRoot(routes);