import { NewUsuarioService } from 'service/new-usuario.service';
import { MenuAdminService } from 'service/menu-admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/objects/Admin';
import { AdminType } from 'src/objects/AdminType';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.css']
})
export class CrearAdminComponent implements OnInit {
formAdminNew!:FormGroup;
  constructor(private service:MenuAdminService, private FormBuilder:FormBuilder, private guardar:NewUsuarioService) { }

  ngOnInit(): void {
    this.formAdminNew= this.FormBuilder.group({
      username:[null,Validators.required],
      pass:[null,Validators.required],
      name:[null,Validators.required],
    })
  }

  saveNewAdmin(){
    if(this.formAdminNew.valid){
      this.guardar.createAdmin(new Admin(this.formAdminNew.value.username, this.formAdminNew.value.pass,this.formAdminNew.value.name, AdminType.ACTIVO))
      .subscribe((created:Admin)=>{
        console.log(created);
        if(created!=null){
          alert("Se Guardo Correctamente"+ created.nombre_usuario);
          this.service.Opcion='';
        }else{
          alert("NO SE PUDO GUARDAR, FAVOR VERIFICA TUS DATOS");
          
        }
      },(error:any)=>{
        alert("ERROR AL GUARDAR "+ error);
      });
     }

  }

}
