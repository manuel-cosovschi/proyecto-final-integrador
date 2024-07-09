import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { LoginComponent } from './login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

export const routes: Routes = [
  { path: '', 
    component: HomeComponent, 
    ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'login', component: LoginComponent}
];

