import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'usuario/:id',
    loadComponent: () => import('./usuario/usuario.page').then( m => m.UsuarioPage)
  },
  {
    path: 'usuario',
    loadComponent: () => import('./usuario/usuario.page').then( m => m.UsuarioPage)
  },
  {
    path: 'profesor/:id',
    loadComponent: () => import('./profesor/profesor.page').then( m => m.ProfesorPage)
  },
  {
    path: 'profesor',
    loadComponent: () => import('./profesor/profesor.page').then( m => m.ProfesorPage)
  },
  {
    path: 'contrasena',
    loadComponent: () => import('./contrasena/contrasena.page').then( m => m.ContrasenaPage)
  },

  {
    path: '**',
    redirectTo: 'home',
    
  },
  
  

  

];
