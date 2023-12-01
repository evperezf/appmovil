import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaClasesPage } from './lista-clases.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.page.html',
  styleUrls: ['./lista-clases.page.scss'],
})
export class ListaClasesPage1 implements OnInit {
  cod_clase: string = '';
  clases: any[] = [];

  constructor() {}

  ngOnInit() {
    // Simulación de datos de clases (reemplaza esto con tus datos reales)
    this.clases = [
      { cod_clase: '' },
      { cod_clase: '' },
      { cod_clase: '' },
    ];
  }
}

