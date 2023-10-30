import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClaseModel } from '../models/ClaseModel';
import { ClaseService } from '../service/clase.service';
import { SeccionService } from '../service/seccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.page.html',
  styleUrls: ['./lista-clases.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListaClasesPage implements OnInit {

  cod_asignatura: string ='';
  clases: any[]; // Asegúrate de que el tipo sea el correcto según tu estructura de datos

  constructor(private seccionService: SeccionService,  private router: Router) {
    this.clases = [];
  }
  ngOnInit() {
    
  }

  buscarClases() {
    this.seccionService.obtenerClasesPorCodAsignatura(this.cod_asignatura).subscribe(
      (data: any) => {
        this.clases = data; // Asigna la respuesta a la propiedad 'clases'
      },
      (error) => {
        console.error('Error al buscar clases:', error);
      }
    );
  }
  navegarAClase() {
    
    this.router.navigate(['/clase', this.cod_asignatura]); // Ajusta la ruta según tu configuración
  }

}
