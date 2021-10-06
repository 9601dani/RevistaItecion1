import { LoginSService } from 'service/login-s.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {
 name!:String;
 type!:String;
  constructor(private newNombre: LoginSService) { }

  ngOnInit() {
   this.name=this.newNombre.getName();
   this.type=this.newNombre.getTypeUser();
  }
  getOptionMenu(){
    return this.type;
  }


}
