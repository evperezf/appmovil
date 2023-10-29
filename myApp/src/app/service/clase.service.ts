import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clase } from '../models/Clase';
import { Observable } from 'rxjs';
import { ClaseModel } from '../models/ClaseModel';


@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(private httpClient: HttpClient) { }

  URL_BASE = 'https://bfyvyvflefbffidpexsg.supabase.co/rest/v1/'
  supabaseHeaders = new HttpHeaders().set("apiKey","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeXZ5dmZsZWZiZmZpZHBleHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0NzExMzIsImV4cCI6MjAxMTA0NzEzMn0.i1LUnYRAvNM5Hi5brRbJmuRxmxfHYOlYZwnGekrgfVU")
  //alumno puede obtener clase -GET
  crearClase(clase: ClaseModel): Observable<ClaseModel> {
    const url = `${this.URL_BASE}CLASE`; // Ajusta la URL de acuerdo a tu API
    return this.httpClient.post<ClaseModel>(url, clase);
  }
  
}
