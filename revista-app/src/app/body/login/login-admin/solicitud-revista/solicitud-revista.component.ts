
import { MenuAdminService } from 'service/menu-admin.service';
import { Etiqueta } from 'src/objects/Etiqueta';
import { MenuAutorService } from './../../../../../../service/menu-autor.service';
import { RevistaForAdmin } from './../../../../../objects/RevistaForAdmin';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Estado_Rev } from 'src/objects/ENUMS/Estado_Rev';
import { AdmitirRevista } from 'src/objects/AdmitirRevista';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-solicitud-revista',
  templateUrl: './solicitud-revista.component.html',
  styleUrls: ['./solicitud-revista.component.css']
})
export class SolicitudRevistaComponent implements OnInit {

  constructor(private MenuAutorService:MenuAutorService, private FormBuilder:FormBuilder,
    private MenuAdminService:MenuAdminService) { }
  revistas!:Array<RevistaForAdmin>;
  rev!:RevistaForAdmin;
  option:number=0;
  myForm!:FormGroup;
  username!:number;
  fecha_acep!:Date;
  costo_dia!:number;
  fecha_mod_costo!:Date;
  estado!:Estado_Rev;
  ngOnInit(): void {
    this.getRevistas();
    this.myForm=this.FormBuilder.group({
      fecha_acep:[null,Validators.required],
      costo_dia:[null,Validators.required],
      fecha_mod_costo:[null,Validators.required]
    })
  }

  getRevistas(){
    this.MenuAutorService.getFiles().subscribe((created:RevistaForAdmin[])=>{
      console.log(created);
      if(created!=null){
        this.revistas=created;
      }else{
        alert("NO HAY REVISTAS PARA ADMITIR");
      }

    },(error:any)=>{
      alert("NO HAY REVISTAS PARA ADMITIR");
    });;
    
  }

  setAdd(op:number){
    this.option=op;
  }
  getAdd():number {
    return this.option;
  }

  admitirRev(fecha_acep:Date, costo_dia:number,fecha_mod:Date,user:number ){
    this.username=user;
    this.fecha_acep=fecha_acep;
    this.costo_dia=costo_dia;
    this.fecha_mod_costo=fecha_mod;
    this.option=1;

  }

  admitirRevFinal(){
    this.MenuAutorService.admitirRev(new AdmitirRevista(this.username, this.fecha_acep,Estado_Rev.ACEPTADA,this.costo_dia,this.fecha_mod_costo)).subscribe((created:Etiqueta)=>{
      console.log(created);
      if(created!=null){
        alert("Se Admitio con exito");
        this.MenuAdminService.Opcion='';
      }else{
        alert("No se pudo Admitir la revista");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });

  }
  public formarearFecha(fecha:string):string{
    let da=  formatDate(fecha,'dd-MM-yyyy','en-US')
    return da
  }
  public formatearFecha(fecha:Date):string{
    let fechaI= fecha.toString()
    let da=  formatDate(fechaI,'dd-MM-yyyy','en-US')
    return da
  }

}
