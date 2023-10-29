import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaClasesPage } from './lista-clases.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.page.html',
  styleUrls: ['./lista-clases.page.scss'],
})
export class ListaClasesPage1 implements OnInit {
  clases: any[] = [];

  constructor() {}

  ngOnInit() {
    // Simulación de datos de clases (reemplaza esto con tus datos reales)
    this.clases = [
      { nombre: 'Clase 1' },
      { nombre: 'Clase 2' },
      { nombre: 'Clase 3' },
    ];
  }
}

