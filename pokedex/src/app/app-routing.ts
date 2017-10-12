import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './pokemonDetails/details.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/pokemons/page/1',
        pathMatch: "full"
    },
    {
        path: 'pokemons/page/:n',
        component: HomeComponent
    },
    {
        path: 'pokemon/:name',
        component: DetailsComponent
    },
];