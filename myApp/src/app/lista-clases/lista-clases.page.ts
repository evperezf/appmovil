import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.page.html',
  styleUrls: ['./lista-clases.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListaClasesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
