import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clase } from '../models/Clase';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(private _http: HttpClient) { }

  superbaseUrl = 'https://bfyvyvflefbffidpexsg.supabase.co/rest/v1/'
  supabaseHeaders = new HttpHeaders().set("apiKey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeXZ5dmZsZWZiZmZpZHBleHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0NzExMzIsImV4cCI6MjAxMTA0NzEzMn0.i1LUnYRAvNM5Hi5brRbJmuRxmxfHYOlYZwnGekrgfVU")
  //alumno puede obtener clase -GET
  ingresar(cod_clase: String): Observable<any>{
    return this._http.get<any>(this.superbaseUrl+'CLASE?cod_clase=eq.'+cod_clase, { headers: this.supabaseHeaders})
  }
// Puede crearse Clase -POST
  newClase(cod_clase: Clase): Observable<any>{
    return this._http.post<any>(this.superbaseUrl+'CLASE',cod_clase,{headers: this.supabaseHeaders});
  }
}
