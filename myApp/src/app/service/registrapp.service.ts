import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrappService {
  
  supabase: SupabaseClient;
  private_currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { 
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey, {
      auth:{
      autoRefreshToken: true,
      persistSession: true
    }
});

  this.supabase.auth.onAuthStateChange((event, session)=> { 
    console.log('event', event);
    if(event =='SIGNED_IN'){
      this.private_currentUser.next(session?.user)
    }else{
      this.private_currentUser.next(false)
    }
  })
  }
  
  loadUser(){
    
  }
  singUp(){

  }
  singIn(){
    
  }
}
