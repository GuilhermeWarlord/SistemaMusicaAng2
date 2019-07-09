import { Routes, RouterModule } from '@angular/router'
import { BandaCrudComponent } from './banda-crud/banda-crud.component';

const BANDA_ROUTES: Routes = [
    {
        path: '', component: BandaCrudComponent
    },
    {
        path: ':id', component: BandaCrudComponent
    }
];
export const bandaRouting = RouterModule.forChild(BANDA_ROUTES);