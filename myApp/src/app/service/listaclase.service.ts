import { Injectable } from '@angular/core';
import { SeccionService } from './seccion.service'; // Importa tu servicio de Seccion
import { ClaseService } from './clase.service'; // Importa tu servicio de Clase
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClasePorSeccionService {
  constructor(
    private seccionService: SeccionService,
    private claseService: ClaseService
  ) {}

  obtenerClasesPorCodAsignatura(codAsignatura: string): Observable<any> {
    // Primero, obtén el código de asignatura de la tabla Seccion
    return this.seccionService.obtenerSeccionPorCodAsignatura(codAsignatura).pipe(
      switchMap((seccion) => {
        if (seccion) {
          // Luego, utiliza el código de asignatura para obtener las clases relacionadas
          return this.claseService.obtenerClasesPorCodAsignatura(seccion.cod_asignatura);
        } else {
          // Maneja el caso en el que no se encuentre una sección con el código de asignatura
          return of([]);
        }
      })
    );
  }
}
