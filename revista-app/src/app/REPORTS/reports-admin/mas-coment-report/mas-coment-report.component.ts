import { Comentario } from 'src/objects/Comentario';
import { AdminBeans } from './../../../../objects/ObjectsForReports/AdminBeans';
import { MenuAdminService } from 'service/menu-admin.service';
import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Respuesta } from 'src/objects/Respuesta';

@Component({
  selector: 'app-mas-coment-report',
  templateUrl: './mas-coment-report.component.html',
  styleUrls: ['./mas-coment-report.component.css']
})
export class MasComentReportComponent implements OnInit {
  fechaI!:string
  fechaF!:string
 myForm!:FormGroup
  archivoPdf!:string
  // variables
  adminbeans!:Array<AdminBeans>
  adminbean!:AdminBeans
  othermaga!:Comentario
  constructor(private FormBuilder:FormBuilder, private MenuAdminService:MenuAdminService) { }

  ngOnInit(): void {
    this.myForm=this.FormBuilder.group({
      fechaI:[null,Validators.required],
      fechaF:[null,Validators.required],
    })
  }
  pedirReporte(){
    if(this.myForm.value.fechaI==null){
      this.myForm.value.fechaI="1900-01-01"
    }
    if(this.myForm.value.fechaF==null){
      this.myForm.value.fechaF="2030-01-01"
    }
    this.MenuAdminService.getSusReportHtml(this.myForm.value.fechaI,this.myForm.value.fechaF).subscribe((created:AdminBeans[])=>{
      console.log(created)
      if(created==null){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
        this.adminbeans=created 
        this.archivoPdf=""
      }
     
    })
  }
  
  pedirReporteGeneral(){
    if(this.myForm.value.fechaI==null){
      this.myForm.value.fechaI="1900-01-01"
    }
    if(this.myForm.value.fechaF==null){
      this.myForm.value.fechaF="2030-01-01"
    }
    this.MenuAdminService.getSusReport(this.myForm.value.fechaI,this.myForm.value.fechaF).subscribe((created:Respuesta)=>{
      console.log(created.respuesta)
      if(created.respuesta=="no"){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
         this.archivoPdf= "data:application/pdf;base64,"+created.respuesta
         console.log("aqui jeje"+this.archivoPdf)
      }
     
    })
  }

}
