import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { UserModel } from '../models/UserModel';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule]})
export class LoginPage implements OnInit {

  //listUser: UserModel[] = [
    //new UserModel('Jorge','Gomez','jgomez@gmail.com',undefined,'USUARIO','jgomez','list','19775479-6','Programacion de Aplicaciones Moviles','PGY4121-007V'),
    //new UserModel('Juan','Perez','jperez@gmail.com',undefined,'ADMIN','jperez','juan123','19775479-6','Programacion de Aplicaciones Moviles','PGY4121-007V'),
    //new UserModel('Carlos','Gomez','cgomez@gmail.com',undefined,'USUARIO','cgomez','carlos123','19775479-6','Programacion de Aplicaciones Moviles','PGY4121-007V'),
    //new UserModel('Valentina','Gomez','vgomez@gmail.com',undefined,'ADMIN','vgomez','valentina123','19775479-6','Programacion de Aplicaciones Moviles','PGY4121-007V')
  //];
  listUser: UserModel[] = [
    new UserModel("ESTEBAN","JARA","GONZALEZ","912312334","ejemplo@ejemplo.cl",undefined,"SUPERIOR","VESPERTINA","eg.gonzalezj","es123456","PASAJERO"),

    new UserModel("PABLO","TORRES","OYARZUN","987342422","ejemplo@ejemplo.cl",undefined,"SUPERIOR","VESPERTINA","p.oyarzunt","pa123456","CONDUCTOR")
  ];

  userLoginModal: IUserLogin = {
    username: '',
    password: ''
  };

  constructor(private route: Router) { }

  ngOnInit() {
    this.userLoginModalRestart();
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
        if(this.listUser[i].tipoUsuario == 'PASAJERO'){
          let sendInfo = this.route.navigate(['/usuario'], userInfoSend);
          return true;
        }else{
          let sendInfo = this.route.navigate(['/admin'], userInfoSend);
          return true;
        }
      }
    }
    this.userLoginModalRestart();
    return false;
    
  }

  userLoginModalRestart(): void{
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
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
  }

  
}

