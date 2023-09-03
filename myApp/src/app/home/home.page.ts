import { Component, ElementRef, ViewChild, } from '@angular/core';
import { IonCard, IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref],
})
export class HomePage {
  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;
  @ViewChild('cardText', { static: true })
  cardText!: ElementRef;


  private animation: any;

  constructor(private animationCtrl: AnimationController) {}

  ionViewWillEnter() {
    // Obtén la duración de la animación del ion-card
    const animationDuration = 1000; // Duración en milisegundos, ajusta según tu animación

    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(animationDuration)
      .keyframes([
        { offset: 0, width: '120px' },
        { offset: 0.72, width: 'var(--width)' },
        { offset: 1, width: '270px' },
      ]);

      this.animation.play();
    

    // Configurar y ejecutar la animación de texto con la velocidad calculada
    const options = {
      strings: ['Para ingresar, haz click en Login'],
      typeSpeed: 70, // Velocidad de escritura (en milisegundos)
      showCursor: false, // Opcional: ocultar el cursor de escritura
    };

    const typed = new Typed(this.cardText.nativeElement, options);
  }
}
