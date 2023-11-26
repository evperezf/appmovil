import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tu-componente',
  templateUrl: 'tu-componente.html',
  styleUrls: ['tu-componente.scss'],
})
export class TuComponente {

  constructor() {}

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
}
