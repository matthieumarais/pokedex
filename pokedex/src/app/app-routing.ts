import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './pokemonDetails/details.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: "full"
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'pokemon',
        component: DetailsComponent
    },
    {
        path: 'pokemon/:name',
        component: DetailsComponent
    },
];