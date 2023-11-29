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
import { Injectable } from "@angular/core";


@Injectable({ 
  providedIn: 'root' 
})

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule, HttpClientModule, NgFor, NgForOf,ReactiveFormsModule],
  providers: [UserService]})

export class LoginPage implements OnInit {
  

   userLoginModal: IUserLogin = {
    tipo_usuario:'',
    password: '',
    email: ''
    
  };

  public userExists?: UserModel;
  public userList$!: Subscription;
  public userList: UserModel[] = [];
  
  userRecuperarModal: EmailLogin = {
    email: '',
    
  };

  constructor(private route: Router, private _usuarioService:UserService ) {}


  ngOnInit(): void {
    this.userLoginModalRestart();
  }

  ionViewWillEnter(): void {
    this.userLoginModalRestart();
  }

  async setObject(user: UserModel) {
    const userString = JSON.stringify(user);
    await Preferences.set({
      key: 'user',
      value: userString
    });
  }

  async getUserFromPreferences(): Promise<UserModel | null> {
    const userString = await Preferences.get({ key: 'user' });
    if (userString && typeof userString.value === 'string') {
      return JSON.parse(userString.value) as UserModel;
    }
    return null;
  }

  async userLogin(userLoginInfo: IUserLogin) {
    this._usuarioService.getLoginUser(userLoginInfo.email, userLoginInfo.password).subscribe({
      next: (user: UserModel) => {
        if (user) {
          //agregado
          this.setObject(user);
          //agregado
          const userInfoSend: NavigationExtras = {
            state: {
              userInfo: user,
            },
          };
          this.route.navigate(['/usuario'], userInfoSend);
          
          const tipoUsuario = user.tipo_usuario.toString();

          if (tipoUsuario === '1') {
            // Si el tipo de usuario es 1 (profesor), redirige a la ruta 'profesor'
            const userInfoSend: NavigationExtras = {
              state: {
                userInfo: user,
              },
            };
            this.setObject(user);
            this.route.navigate(['/profesor'], userInfoSend);
          } else if (tipoUsuario === '2') {
            // Si el tipo de usuario es 2 (alumno), redirige a la ruta 'usuario'
            const userInfoSend: NavigationExtras = {
              state: {
                userInfo: user,
              },
            };

            this.setObject(user);
            this.route.navigate(['/usuario'], userInfoSend);
          } else {
            console.log("Tipo de usuario no reconocido.");
          }
        } else {
          console.log("Usuario no existe...");
        }
      },
      error: (err) => {
        // Manejo de errores
      },
      complete: () => {
        // Acciones completadas
      },
    });
  }
  // En la página anterior

  userLoginModalRestart(): void {
    this.userLoginModal.email = '';
    this.userLoginModal.password = '';
  }
  


  
}

