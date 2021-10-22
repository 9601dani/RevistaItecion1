import { MenuAdminService } from 'service/menu-admin.service';
import { LoginSService } from './../../../../../service/login-s.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/objects/Admin';
import { AdminType } from 'src/objects/AdminType';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
formAdmin!:FormGroup;
  constructor(private LoginSService: LoginSService, 
    private FormBuilder:FormBuilder, private route: Router, private MenuAdminService:MenuAdminService) { }

  ngOnInit(): void {
     this.formAdmin=this.FormBuilder.group({
      inputNombreUsuario:[null,Validators.required],
      inputPassword:[null,Validators.required],
    })
  }

  validarAdmin(){
    if(this.formAdmin.valid){
      this.LoginSService.createAdmin(new Admin(this.formAdmin.value.inputNombreUsuario, this.formAdmin.value.inputPassword," ", AdminType.ACTIVO))
      .subscribe((created:Admin)=>{
        console.log(created);
        if(created!=null){
          localStorage.setItem("Admin",JSON.stringify(created));
          alert("INICIO DE SESION CORRECTO");
          this.MenuAdminService.Opcion='';
          this.route.navigate(['SUPPORT/',created.nombre_usuario]);
        }else{
          alert("NO SE INICIO SESION REVISA LOS DATOS INGRESADOS\nO DIRIGITE A ADMINISTRACION PUEDE QUE TU\nUSUARIO NO ESTE ACTIVO");
          
        }
      },(error:any)=>{
        alert("ERROR AL GUARDAR "+ error);
      });
     }

  }

}
