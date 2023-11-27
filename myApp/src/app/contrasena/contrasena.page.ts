import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from '../models/UserModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';


@Injectable({ 
  providedIn: 'root' 
})

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HttpClientModule]
})
export class ContrasenaPage implements OnInit {

  userInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;

  constructor() {
    
   }

  ngOnInit() {
  }

}

