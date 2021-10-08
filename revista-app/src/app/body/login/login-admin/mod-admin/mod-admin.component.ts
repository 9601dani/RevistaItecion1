import { MenuAdminService } from 'service/menu-admin.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { AdminType } from './../../../../../objects/AdminType';
import { ObtenerInfoUserService } from './../../../../../../service/obtener-info-user.service';
import { Admin } from './../../../../../objects/Admin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-admin',
  templateUrl: './mod-admin.component.html',
  styleUrls: ['./mod-admin.component.css']
})
export class ModAdminComponent implements OnInit {
listAdmins!:Array<Admin>;
admin!:Admin;
option!:number;

username!:String;
name!:String;
pass!:String;
estado!:AdminType;

myForm!:FormGroup;
  constructor(private ObtenerInfoUserService:ObtenerInfoUserService,
    private FormBuilder:FormBuilder, private MenuAdminService:MenuAdminService) { }

  ngOnInit(): void {
    this.getInfoAdmin();
    this.myForm=this.FormBuilder.group({
      username:[null,Validators.required],
      name:[null,Validators.required],
      pass:[null,Validators.required],
      estado:[null,Validators.required]
    })
  }
  getInfoAdmin(){
   this.ObtenerInfoUserService.getInfoAdmin().subscribe((created:Admin[])=>{
      console.log(created);
      console.log("verifica aqui");
      if(created!=null){
       this.listAdmins=created;
      }else{
        alert("ERROR AQUI");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });
  }
  
  editarUser(username:String,name:String,pass:String,estado:AdminType){
    this.username=username;
    this.name=name;
    this.pass=pass;
    this.estado=estado;
    this.option=1;
  }
  setOpcion(op:number){
    this.option=op;
  }
  getOpcion():number {
    return this.option;
  }

  updateAdmin(){
    this.ObtenerInfoUserService.updateAdmin(new Admin(this.username, this.pass,this.name,this.estado)).subscribe((created:Admin)=>{
      console.log(created);
      if(created!=null){
        alert("Se Actualizo con Exito");
        this.MenuAdminService.Opcion='';
      }else{
        alert("ERROR AQUI");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });

  }
  desUser(){
    this.ObtenerInfoUserService.updateAdmin
    this.ObtenerInfoUserService.outAdmin(new Admin(this.username, this.pass,this.name,AdminType.DESACTIVO)).subscribe((created:Admin)=>{
      console.log(created);
      if(created!=null){
        alert("Se Desactivo con Exito");
        this.MenuAdminService.Opcion='';
      }else{
        alert("ERROR AQUI");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });
  }
  activarUser(){
    this.ObtenerInfoUserService.updateAdmin
    this.ObtenerInfoUserService.outAdmin(new Admin(this.username, this.pass,this.name,AdminType.ACTIVO)).subscribe((created:Admin)=>{
      console.log(created);
      if(created!=null){
        alert("Se Activo con Exito");
        this.MenuAdminService.Opcion='';
      }else{
        alert("ERROR AQUI");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });
  }

}
