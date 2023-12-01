import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClaseModel } from '../models/ClaseModel';
import { SeccionService } from '../service/seccion.service';
import { Router } from '@angular/router';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Clase } from '../models/Clase'; // Asegúrate de que la ruta sea correcta
import { ClaseService } from '../service/clase.service';



@Injectable({ 
  providedIn: 'root' 
})

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.page.html',
  styleUrls: ['./lista-clases.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HttpClientModule]
})
export class ListaClasesPage implements OnInit {
  cod_clase: string = '';
  clases: any[] = []; // Asegúrate de que el tipo sea el correcto según tu estructura de datos
  selectedClase: string = ''; // Variable para almacenar el código de clase seleccionado
  qrCodeURL: string | undefined;

  constructor(private seccionService: SeccionService, private router: Router) {}

  ngOnInit() {
    this.buscarClases();
  }

  buscarClases() {
    this.seccionService.obtenerCodigosClase().subscribe(
      (data: string[]) => {
        this.clases = data; // Asigna la respuesta a la propiedad 'clases'
        console.log(this.clases);
      },
      (error) => {
        console.error('Error al buscar clases:', error);
      }
    );
  }
  
  generarCodigoQR() {
    // Aquí construyes la URL para generar el código QR con el valor seleccionado
    const urlBase = 'https://api.qrserver.com/v1/create-qr-code/';
    const data = `data=${this.cod_clase}`;
    const size = 'size=100x100';

    // Construyes la URL completa para la imagen del código QR
    this.qrCodeURL = `${urlBase}?${data}&${size}`;

    // Luego puedes utilizar qrCodeURL donde lo necesites en tu componente HTML
    console.log(this.qrCodeURL); // Para propósitos de demostración, imprime la URL en la consola
  }

  navegarAClase() {
    if (this.selectedClase) {
      this.router.navigate(['/lista_clases', this.selectedClase]); // Usar el código de clase seleccionado
    } else {
      console.error('Por favor, selecciona un código de clase.');
      // Aquí puedes manejar el caso en el que no se haya seleccionado ninguna clase
    }
  }


}

const apiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeXZ5dmZsZWZiZmZpZHBleHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0NzExMzIsImV4cCI6MjAxMTA0NzEzMn0.i1LUnYRAvNM5Hi5brRbJmuRxmxfHYOlYZwnGekrgfVU'; // Reemplaza con tu clave de API

const httpOptions = {
  headers: new HttpHeaders({
    apikey: apiKey,
  }),
};
