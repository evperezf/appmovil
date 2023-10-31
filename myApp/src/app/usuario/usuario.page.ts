import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { UserTypeService } from '../service/user-type.service';
import { SeccionService } from '../service/seccion.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UsuarioPage implements OnInit {
  userInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;
  cod_asignatura: string ='';
  clases: any[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private seccionService: SeccionService) {
    this.clases = [];
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    // Si quiero obtener un valor por URL usando routerLink
    this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
    // Obteniendo el ID podria buscar en algún arreglo o BD el usuario con el id
    console.log("Valor obtenido desde URL: ",this.idUserHtmlRouterLink);
    console.log("userInfoReceived: ", this.userInfoReceived);
   }
   navegarAClase() {
    this.router.navigate(['/listaclases']); // Ajusta la ruta según tu configuración
  }

  ngOnInit() {
    console.log("userInfoReceived en ngOnInit: ", this.userInfoReceived);
    
  }
}