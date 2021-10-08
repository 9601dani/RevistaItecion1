import { LoginSService } from 'service/login-s.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuUserService } from 'service/menu-user.service';
import { User } from 'src/objects/User';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {
 name!:String;
 type!:String;
 user:User=JSON.parse(<string>localStorage.getItem('userS'));
  constructor(private newNombre: LoginSService, private service:MenuUserService,
    private route:Router) { }

  ngOnInit(): void {   
   console.log(this.user);
   this.name= this.user.nombre;
   this.type=this.user.tipo_usuario;
  }
  getOptionMenu(){
    return this.type;
  }

  CambiarPagina(op:string){
    this.service.Op=op;
  }
  cerrarSesion(){
    this.route.navigate(['/']);
  }


}
