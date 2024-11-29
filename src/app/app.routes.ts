import { Routes } from '@angular/router';
import { PilotoFormPageComponent } from './piloto/piloto-pages/piloto-form-page/piloto-form-page.component';
import { PilotoListPageComponent } from './piloto/piloto-pages/piloto-list-page/piloto-list-page.component';
import { PilotoDetailsPageComponent } from './piloto/piloto-pages/piloto-details-page/piloto-details-page.component';
import { PilotoEditPageComponent } from './piloto/piloto-pages/piloto-edit-page/piloto-edit-page.component';

export const routes: Routes = [
    {
        path: 'piloto-form',
        component: PilotoFormPageComponent
    },
    {
        path: 'piloto-list',
        component: PilotoListPageComponent
    },
    {
        path: 'piloto-details/:id',
        component: PilotoDetailsPageComponent
    },
    {
        path: 'piloto-edit/:id',
        component: PilotoEditPageComponent
    }
];
