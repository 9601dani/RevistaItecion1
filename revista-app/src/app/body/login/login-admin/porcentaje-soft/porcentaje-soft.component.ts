import { MenuAdminService } from './../../../../../../service/menu-admin.service';
import { Etiqueta } from './../../../../../objects/Etiqueta';
import { ObtenerInfoUserService } from './../../../../../../service/obtener-info-user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Porcentaje } from 'src/objects/Porcentaje';
import { Admin } from 'src/objects/Admin';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-porcentaje-soft',
  templateUrl: './porcentaje-soft.component.html',
  styleUrls: ['./porcentaje-soft.component.css']
})
export class PorcentajeSoftComponent implements OnInit {
myForm!:FormGroup;
//Formulario
id_porcentaje!:number;
porcentaje!:number;
fecha_mod!:string;
user!:string;
ad:Admin=JSON.parse(<string>localStorage.getItem("Admin"))
//Porcentaje
objetPo!:Porcentaje[];
  constructor( private FormBuilder:FormBuilder, private servicio:ObtenerInfoUserService, private MenuAdminService:MenuAdminService) { }

  ngOnInit(): void {
    this.getPorcentaje();
    this.myForm=this.FormBuilder.group({
      fecha_mod:[null,Validators.required],
      porcentaje:[null,Validators.required]
    })
  }

  getPorcentaje(){
    this.servicio.getPorcentaje().subscribe((created:Porcentaje[])=>{
      console.log(created);
      if(created!=null){
       this.objetPo=created;
       this.id_porcentaje= this.objetPo[0].id_porcentaje;
      }else{
        alert("actualmente no se ah asignado ningun porcentaje");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });
  }
  updatePorcentaje(){
    
    this.servicio.updatePorcentaje(new Porcentaje(this.id_porcentaje,this.myForm.value.porcentaje,this.myForm.value.fecha_mod,this.ad.nombre_usuario)).subscribe((created:Etiqueta)=>{
      console.log(created);
      if(created!=null){
      alert("se modifico exitosamente")
      this.getPorcentaje()
      this.MenuAdminService.Opcion='';
      }else{
        alert("No se pudo actualizar por favor intenta de nuevo");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });

  }
  public formarearFecha(fecha:string):string{
    let da=  formatDate(fecha,'dd-MM-yyyy','en-US')
    return da
  }
}
