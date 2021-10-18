import { UserType } from './../../../objects/UserType';
import { NewUsuarioService } from './../../../../service/new-usuario.service';
import { LoginSService } from './../../../../service/login-s.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/objects/User';
import { Router} from '@angular/router';
import { MenuUserComponent } from 'src/app/menu/menu-user/menu-user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nname!:MenuUserComponent;
  public formLogin!: FormGroup;
  public uType=UserType;
  constructor(private LoginSService:LoginSService, 
    private FormBuilder:FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.formLogin=this.FormBuilder.group({
      inputNombreUsuario:[null,Validators.required],
      inputPassword:[null,Validators.required],
    })
  }
  validarUsuario(){
    if(this.formLogin.valid){
      this.LoginSService.createUser(new User(this.formLogin.value.inputNombreUsuario,this.formLogin.value.inputPassword,"p"," ",UserType.USUARIO))
      .subscribe((created:User)=>{
        console.log(created);
        if(created!=null){
          localStorage.setItem("userS",JSON.stringify(created));
          alert("INICIO DE SESION CORRECTO");
          this.route.navigate(['user-home/',created.nombre_usuario]);
        }else{
          alert("NO SE INICIO SESION REVISA LOS DATOS INGRESADOS");
          
        }
      },(error:any)=>{
        alert("ERROR AL GUARDAR "+error);
      });
     }
  }
}
