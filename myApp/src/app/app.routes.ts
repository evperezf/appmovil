import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'usuario/:username',
    loadComponent: () => import('./usuario/usuario.page').then( m => m.UsuarioPage)
  },
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  //{
    //path: 'usuario',
    //loadComponent: () => import('./usuario/usuario.page').then( m => m.UsuarioPage)
  //},

];
