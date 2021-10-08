import { MenuAdminComponent } from './../../../../menu/menu-admin/menu-admin.component';
import { ObtenerInfoUserService } from './../../../../../../service/obtener-info-user.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Etiqueta } from 'src/objects/Etiqueta';
import { MenuAdminService } from 'service/menu-admin.service';

@Component({
  selector: 'app-asig-etiqueta',
  templateUrl: './asig-etiqueta.component.html',
  styleUrls: ['./asig-etiqueta.component.css']
})
export class AsigEtiquetaComponent implements OnInit {
formEtiqueta!:FormGroup;
etiq!:Etiqueta;
  constructor(private FormBuilder:FormBuilder, private save:ObtenerInfoUserService,
    private service: MenuAdminService) { }

  ngOnInit(): void {
    this.formEtiqueta= this.FormBuilder.group({
      nameEtiqueta:[null,Validators.required],
    })
  }

  saveEtiqueta(){
    if(this.formEtiqueta.valid){
      this.save.saveEtiqueta(new Etiqueta(this.formEtiqueta.value.nameEtiqueta))
      .subscribe((created:Etiqueta)=>{
        console.log(created);
        if(created!=null){
          alert("Se Guardo Correctamente"+ created.nombre_etiqueta);
          this.etiq=created;
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
