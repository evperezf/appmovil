import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrappService {
  
  private supabase_client: SupabaseClient

  constructor() { 
    this.supabase_client = createClient(environment.supabaseUrl, environment.supabaseKey);
  
  }
  
  loadUser(){
    
  }
  /*singUp(email: string, password: string) {
    //const {error, data} = await this.supabase.auth.signUp(credentials);
    return this.supabase_client.auth.signUp({email, password});

  }*/
  singIn(email: string, password: string) {
    //const {error, data} = await this.supabase.auth.signUp(credentials);
    return this.supabase_client.auth.signInWithPassword({email,password});
  }
}
