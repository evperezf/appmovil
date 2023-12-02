import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { UserTypeService } from '../service/user-type.service';
import { SeccionService } from '../service/seccion.service';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner ,BarcodeFormat ,LensFacing, BarcodeScannerPlugin } from '@capacitor-mlkit/barcode-scanning';


@Injectable({ 
  providedIn: 'root' 
})

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class UsuarioPage implements OnInit {
  userInfoReceived: UserModel | undefined;
  cod_asignatura: string ='';
  clases: any[];
  tipoUsuarioNombre: string | undefined;
  cod_clase: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private seccionService: SeccionService) {
    this.clases = [];
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['userInfo'];
    console.log("userInfoReceived: ", this.userInfoReceived);
    this.convertirTipoUsuarioNombre();
   }
   ngOnInit() {
    console.log("userInfoReceived en ngOnInit: ", this.userInfoReceived);

  }
  
  async escanearCodigoQR() {
    try {
      const result = await BarcodeScanner.startScan();
      console.log('Resultado del escaneo:', result);
      // Aquí puedes manejar el resultado del escaneo
    } catch (error) {
      console.error('Error al escanear el código QR:', error);
      // Manejar el error según sea necesario
    }
  }
  
  
  
  

  convertirTipoUsuarioNombre() {
    if (this.userInfoReceived) {
      const tipoUsuario = parseInt(this.userInfoReceived?.tipo_usuario, 10);
      if (!isNaN(tipoUsuario))
      if (tipoUsuario === 2) {
        this.tipoUsuarioNombre = 'ALUMNO';
        console.log("nombre alumno es ",this.tipoUsuarioNombre);
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

  
}