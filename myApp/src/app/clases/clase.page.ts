import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonModal } from '@ionic/angular';
import { Router } from '@angular/router';
import { ClaseService} from '../service/clase.service';
import { lastValueFrom } from 'rxjs';
import { Clase } from '../models/Clase';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ClasePage implements OnInit {

    @ViewChild(IonModal) modal!: IonModal;

  message = 'Clase creada';
  nameClass!: string;
  claseId!: any;
  class: any;
  clases: Clase = {
    cod_clase: '',
    fecha: '',
    horario: '',
    aula: ''

  };
  constructor(private router: Router, private _claseService: ClaseService) {
    this.claseId = this.router.getCurrentNavigation()?.extras.state?.['claseId'];
    console.log(this.claseId)
  }

    ngOnInit() {
        this.getClase();
       
    }
    async getClase() {
        this.class = await lastValueFrom(this._claseService.ingresar(this.claseId));
        console.log(this.class);
      }

      async insertarClase(clase: Clase) {
        console.info(clase)
        this.modal.dismiss(this.nameClass, 'confirm');
        const response = await lastValueFrom(this._claseService.newClase(clase));
        this.getClase();
      }
    
      cancel() {
        this.modal.dismiss(null, 'cancel');
      }
    
      confirm() {
    
      }
    
      onWillDismiss(event: Event) {
        const ev = event as CustomEvent<OverlayEventDetail<string>>;
        if (ev.detail.role === 'confirm') {
          this.message = `Hello, ${ev.detail.data}!`;
        }
      }
}