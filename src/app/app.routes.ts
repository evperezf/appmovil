import { Routes } from '@angular/router';
import { canActivateUsuario } from './service/guards/new-guard';

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
    path: 'usuario/:tipo_usuario',
    loadComponent: () => import('./usuario/usuario.page').then( m => m.UsuarioPage)
  },
  {
    path: 'usuario',
    loadComponent: () => import('./usuario/usuario.page').then( m => m.UsuarioPage),
    canActivate: [canActivateUsuario]
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
    path: 'clases',
    loadComponent: () => import('./clases/clase.page').then( m => m.ClasePage)
  },
  {
    path: 'listaclases',
    loadComponent: () => import('./lista-clases/lista-clases.page').then( m => m.ListaClasesPage)
  },
    
  {
    path: '**',
    redirectTo: 'home',
    
  },
  {
    path: 'lista-clases',
    loadComponent: () => import('./lista-clases/lista-clases.page').then( m => m.ListaClasesPage)
  },

  
  

  

];
