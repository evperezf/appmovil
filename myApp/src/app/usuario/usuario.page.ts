import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { UserTypeService } from '../service/user-type.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UsuarioPage implements OnInit {
  cod_asignatura: string ='';
  userInfoReceived: UserModel | undefined;
  tipo_usuario: number;

  constructor(private activatedRoute: ActivatedRoute, private userType: UserTypeService,  private router: Router) {
    this.tipo_usuario = this.activatedRoute.snapshot.params['id']; // Obtén el valor de la URL
  }

  ngOnInit() {
    this.userType.getUser(this.tipo_usuario.toString()).subscribe((user: UserModel) => {
      this.userInfoReceived = user; // Asigna el valor del usuario cuando se completa la solicitud
    });
  }
  navegarAClase() {
    
    this.router.navigate(['/listaclases', this.cod_asignatura]); // Ajusta la ruta según tu configuración
  }
}