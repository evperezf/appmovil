import { Injectable } from "@angular/core";
import { UserModel } from '../models/UserModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from "rxjs";



@Injectable({ providedIn: 'root' })
export class UserService {

    URL_SUPABASE = 'https://bfyvyvflefbffidpexsg.supabase.co'

    constructor(private _httpclient: HttpClient) { }

    supabaseheaders = new HttpHeaders().set('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeXZ5dmZsZWZiZmZpZHBleHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0NzExMzIsImV4cCI6MjAxMTA0NzEzMn0.i1LUnYRAvNM5Hi5brRbJmuRxmxfHYOlYZwnGekrgfVU')

    getUserListSupaBase(): Observable<UserModel[]> {
        return this._httpclient.get<UserModel[]>(this.URL_SUPABASE, { headers: this.supabaseheaders, responseType: 'json' });
    }

    getUser(user_id: string): Observable<UserModel> {
        return this._httpclient.get<UserModel>(this.URL_SUPABASE+'?user_id=eq.'+user_id, { headers: this.supabaseheaders.set('Accept', 'application/vnd.pgrst.object+json'), responseType: 'json' });
    }

    getLoginUser(username: string, password: string): Observable<UserModel> {
        return this._httpclient.get<UserModel>(this.URL_SUPABASE+'?select=user_id,first_name,last_name,email,phone,type(id,name),created_at,empresas(id,name)&username=eq.'+username+'&password=eq.'+password, { headers: this.supabaseheaders.set('Accept', 'application/vnd.pgrst.object+json'), responseType: 'json' });
    }
}

//los datos como user_id se asocian a la base de datos que presenta el profe?