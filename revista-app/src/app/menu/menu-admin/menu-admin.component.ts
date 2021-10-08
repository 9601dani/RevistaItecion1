import { Admin } from './../../../objects/Admin';
import { Router } from '@angular/router';
import { MenuAdminService } from './../../../../service/menu-admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(private service:MenuAdminService, private route: Router) { }
adminF:Admin= JSON.parse(<string>localStorage.getItem('Admin'));
user!:String;
  ngOnInit(): void {
    this.user=this.adminF.nombre_usuario;
  }

  cambiarHoja(op:string){
      this.service.Opcion=op;

  }
  cerrarSesion(){
this.route.navigate(["/"]);
  }
}
