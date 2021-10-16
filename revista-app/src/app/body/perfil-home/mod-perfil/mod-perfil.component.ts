import { ObtenerInfoUserService } from './../../../../../service/obtener-info-user.service';
import { MenuUserService } from 'service/menu-user.service';
import { ServiceHomeService } from 'service/service-home.service';
import { UserComplete } from 'src/objects/UserComplete';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mod-perfil',
  templateUrl: './mod-perfil.component.html',
  styleUrls: ['./mod-perfil.component.css']
})
export class ModPerfilComponent implements OnInit {
userCom:UserComplete = JSON.parse(<string>localStorage.getItem('userComplete'));
photo!:string;
public formUpdate!: FormGroup;
  constructor( private service: MenuUserService,private FormBuilder:FormBuilder,
    private ObtenerInfoUserService:ObtenerInfoUserService) { }

  ngOnInit(): void {
    console.log(this.userCom.des_personal+" aqui es");
    this.formUpdate=this.FormBuilder.group({
      inputPassword:[null,Validators.required],
      inputPersona:[null,Validators.required],
      inputHobbies:[null,Validators.required],
      inputName:[null,Validators.required]
    })

  }
  CambiarPagina(op:string){
    this.service.Op=op;
  }

  updateUser(){if(this.formUpdate.valid){
    this.ObtenerInfoUserService.updateUser(new UserComplete(this.userCom.nombre_usuario,this.formUpdate.value.inputPassword,this.formUpdate.value.inputName,this.formUpdate.value.inputPersona,this.formUpdate.value.inputHobbies, this.photo, this.userCom.tipo_usuario))
    .subscribe((created:UserComplete)=>{
      console.log(created);
      console.log("verifica aqui");
      if(created!=null){
        alert("SE ACTUALIZO");
        localStorage.removeItem("userS");
        localStorage.setItem("userS",JSON.stringify(created));
        this.CambiarPagina("perfil");
      }else{
        alert("ERROR AQUI");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+error);
    });
   }}

}
