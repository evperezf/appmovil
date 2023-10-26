import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

    superbaseUrl = 'https://bfyvyvflefbffidpexsg.supabase.co/rest/v1/'
    supabaseHeaders = new HttpHeaders().set("apiKey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeXZ5dmZsZWZiZmZpZHBleHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0NzExMzIsImV4cCI6MjAxMTA0NzEzMn0.i1LUnYRAvNM5Hi5brRbJmuRxmxfHYOlYZwnGekrgfVU")
  constructor(private _httpclient: HttpClient) { }


  getUserType(user_id: string): Observable<any>{
    console.log("[src][app][services][userTypeService][user-type-service]")
    return this._httpclient.get<any>(this.superbaseUrl+'CLASE?select=,user,company(*)&user=eq.'+user_id, { headers: this.supabaseHeaders, responseType: 'json'}).pipe(
      map( (data) => {
        console.log(data);
        return data;
      }),
      catchError( (error) => {
        console.log(error)
        return error;
      })
    );
  }
}
