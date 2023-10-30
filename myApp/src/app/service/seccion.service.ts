import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeccionService {
    URL_BASE = 'https://bfyvyvflefbffidpexsg.supabase.co/rest/v1/'
    supabaseHeaders = new HttpHeaders().set("apiKey",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeXZ5dmZsZWZiZmZpZHBleHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0NzExMzIsImV4cCI6MjAxMTA0NzEzMn0.i1LUnYRAvNM5Hi5brRbJmuRxmxfHYOlYZwnGekrgfVU')
    

  constructor(private http: HttpClient) {}

  obtenerSeccionPorCodAsignatura(codAsignatura: string): Observable<any> {
    // Realiza una solicitud HTTP (GET) para obtener una sección por su código de asignatura
    const url = `${this.URL_BASE}/SECCION?cod_asignatura=${codAsignatura}`;

    return this.http.get(url);
  }
  obtenerClasesPorCodAsignatura(codAsignatura: string): Observable<any> {
    // Realiza una solicitud HTTP (GET) para obtener clases por su código de asignatura
    const url = `${this.URL_BASE}/CLASE?cod_asignatura=${codAsignatura}`;

    return this.http.get(url);
  }
}