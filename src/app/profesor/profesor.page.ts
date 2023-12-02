import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';


@Injectable({ 
  providedIn: 'root' 
})


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HttpClientModule]
})
export class ProfesorPage implements OnInit {

  userInfoReceived: UserModel | undefined;
  tipoUsuarioNombre: string | undefined;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['userInfo'];
    console.log("este es el userInfoReceived ",this.userInfoReceived);
    this.convertirTipoUsuarioNombre();
    // Si quiero obtener un valor por URL usando routerLink
    
  }
  redirigirACrearClase() {
    // Realiza la redirección a la página de creación de clases
    this.router.navigate(['/clases']);
    
    console.log("nombre profesor ",this.tipoUsuarioNombre);
  }
  navegarAClase() {
    this.router.navigate(['/listaclases']); // Ajusta la ruta según tu configuración
    return true;
  }
  convertirTipoUsuarioNombre() {
    if (this.userInfoReceived) {
      const tipoUsuario = parseInt(this.userInfoReceived?.tipo_usuario, 10);
      if (!isNaN(tipoUsuario))
      if (tipoUsuario === 1) {
        this.tipoUsuarioNombre = 'PROFESOR';
        console.log("nombre profesor ",this.tipoUsuarioNombre);
      } else {
        this.tipoUsuarioNombre = 'Otro'; // Otra opción de manejo
      }  
    }
  }
  
  capitalizeFirstLetter(text: string | undefined): string {
    if (text) {
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
    return ''; // En caso de que sea undefined
  }
  

  ngOnInit() {
  }

}
