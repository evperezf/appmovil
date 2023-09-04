import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContrasenaPage } from './contrasena.page';

describe('ContrasenaPage', () => {
  let component: ContrasenaPage;
  let fixture: ComponentFixture<ContrasenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
