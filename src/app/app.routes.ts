import { Routes } from '@angular/router';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { DetallesJuegosComponent } from './pages/detalles-juegos/detalles-juegos.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'juegos', component: JuegosComponent},
    {path:'contactos', component:ContactosComponent},
    {path: 'detalles-juegos/:idJuegos', component: DetallesJuegosComponent},

    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: '**', component: Error404Component}

];
