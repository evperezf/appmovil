import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfesorPage implements OnInit {

  userInfoReceived: UserModel | undefined;
  tipoUsuarioNombre: string | undefined;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['userInfo'];
    console.log("este es el userInfoReceived ",this.userInfoReceived);
    // Si quiero obtener un valor por URL usando routerLink
    
  }
   redirigirACrearClase() {
    // Realiza la redirección a la página de creación de clases
    this.router.navigate(['/clases']);
    this.convertirTipoUsuarioNombre();
    console.log("nombre profesor ",this.tipoUsuarioNombre);
    }
    convertirTipoUsuarioNombre() {
      if (this.userInfoReceived) {
        const tipoUsuario = this.userInfoReceived.tipo_usuario;
        if (tipoUsuario === 1) {
         this.tipoUsuarioNombre = 'Profesor';
         console.log("nombre profesor ",this.tipoUsuarioNombre);
        } else {
         this.tipoUsuarioNombre = 'Otro'; // Otra opción de manejo
        }  
      }
    }
  

  ngOnInit() {
  }

}
