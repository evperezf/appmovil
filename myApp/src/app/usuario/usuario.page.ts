import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { UserTypeService } from '../service/user-type.service';
import { SeccionService } from '../service/seccion.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UsuarioPage implements OnInit {
  userInfoReceived: UserModel | undefined;
  cod_asignatura: string ='';
  clases: any[];
  tipoUsuarioNombre: string | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private seccionService: SeccionService, private qrScanner: QRScanner) {
    this.clases = [];
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['userInfo'];
    console.log("userInfoReceived: ", this.userInfoReceived);
    this.convertirTipoUsuarioNombre();
   }
   navegarAClase() {
    //this.router.navigate(['/listaclases']); // Ajusta la ruta según tu configuración
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

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      console.log('Imagen capturada:', image.webPath);
      // Aquí puedes manejar la imagen capturada, por ejemplo, mostrarla en la interfaz o realizar alguna acción con ella
    } catch (error) {
      console.error('Error al capturar imagen:', error);
    }
  }
  scanQRCode() {
    this.qrScanner.prepare()
       .then((status: QRScannerStatus) => {
         if (status.authorized) {
           // start scanning
           let scanSub = this.qrScanner.scan().subscribe((text: string) => {
             console.log('QR Code Matched:', text);
             // TODO: Implementar la lógica para manejar el código QR leído.
             // Por ejemplo, podría ser un enlace o una información para actualizar en la base de datos.
   
             // deactivate the scanner after successful scan
             this.qrScanner.destroy().then(() => {
               scanSub.unsubscribe(); // stop scanning
             });
           });
   
           // show camera preview
           this.qrScanner.show();
   
           // wait for user to scan something, then the observable callback will be called
         } else if (status.denied) {
           console.log('Permiso de cámara negado.');
         } else {
           console.log('No se pudo acceder a la cámara.');
         }
       })
       .catch((e: any) => console.log('Error:', e));
   }

  ngOnInit() {
    
  }
}