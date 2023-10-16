import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { UserModel } from '../models/UserModel';
import { EmailLogin } from '../models/EmailModel';
import { RegistrappService } from '../service/registrapp.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user-service';
import { Preferences } from '@capacitor/preferences';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule, HttpClientModule, NgFor, NgForOf,ReactiveFormsModule],
  providers: [UserService]})

export class LoginPage implements OnInit, OnDestroy {
  

   userLoginModal: IUserLogin = {
    username: '',
    password: '',
    email: ''
    
  };

  public userExists?: UserModel;
  public userList$!: Subscription;
  public userList: UserModel[] = [];
  /*
  userRecuperarModal: EmailLogin = {
    email: '',
    
  };*/

  constructor(private route: Router, private _usuarioService:UserService ) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    /*this.userLoginModalRestart();
    this.emailModalRestart();*/
  }

  async setObject(user: UserModel) {
    await Preferences.set({
      key: 'user',
      value: JSON.stringify(user)
    });
  }

  async userLogin(userLoginInfo: IUserLogin) {
    this._usuarioService.getLoginUser(userLoginInfo.email, userLoginInfo.password).subscribe(
      {
        next: (user) => {
          console.log(user);
          if (user) {
            //EXISTE
            let userInfoSend: NavigationExtras = {
              state: {
                userInfo: user.rut //rut corresponde al id unico de cada usuario
              }
            }
            console.log("Usuario existe...");
            this.setObject(user);
            console.log(userInfoSend);
            this.route.navigate(['/usuario'], userInfoSend)
          } else {
            //NO EXISTE
            console.log("Usuario no existe...");
          }
        },
        error: (err) => {

        },
        complete: () => {

        }
      }
    )
  }


  userLoginModalRestart(): void {
    this.userLoginModal.email = '';
    this.userLoginModal.password = '';
  }
  /*signUp(){
    this.registrappService({'',''}).then(data => {
      if(data,error){
        
      }
    })
  }
  userLogin(userLoginInfo: IUserLogin): boolean{

    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        if(this.listUser[i].tipoUsuario == 'ESTUDIANTE'){
          let sendInfo = this.route.navigate(['/usuario'], userInfoSend);
          return true;
        
        }else{
          let sendInfo = this.route.navigate(['/profesor'], userInfoSend);
          return true;
        }
      }
    }
    this.userLoginModalRestart();
    return false;
    
  }
  /* */
 /* EmailLogin(userLoginInfo: EmailLogin): boolean{
    console.log('Click en enlace de recuperación de contraseña');

    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].email == userLoginInfo.email)){
        console.log('User Loged...', this.userRecuperarModal.email);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        if(this.listUser[i].tipoUsuario == 'ESTUDIANTE'){
          let sendInfo = this.route.navigate(['/contrasena'], userInfoSend);
          return true;
        
        }else{
          let sendInfo = this.route.navigate(['/contrasena'], userInfoSend);
          return true;
        }
      }
    }
    this.userLoginModalRestart();
    return false;
    
  }

  /* */
  /*userLoginModalRestart(): void{
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
    console.log('si');
  }
  emailModalRestart(): void{
    this.userRecuperarModal.email = '';
   
    console.log('si');
  }
  
  
  ionViewWillLeave() {
    // Detener y limpiar Typed.js antes de abandonar la página
    const typedElement = document.querySelector('.typed') as HTMLElement;
    if (typedElement) {
      typedElement.innerHTML = ''; // Limpiar el contenido de Typed.js
    }
  }

  goToHomePage() {
    this.route.navigate(['/home']);
  }*/

  
}

