import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaClasesPage } from './lista-clases.page';

describe('ListaClasesPage', () => {
  let component: ListaClasesPage;
  let fixture: ComponentFixture<ListaClasesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaClasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
