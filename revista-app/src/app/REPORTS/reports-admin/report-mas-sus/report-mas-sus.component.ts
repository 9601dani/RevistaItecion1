import { Suscripcion } from './../../../../objects/Suscripcion';
import { MenuAdminService } from 'service/menu-admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Respuesta } from 'src/objects/Respuesta';
import { AdminBeans } from 'src/objects/ObjectsForReports/AdminBeans';
import { ABeans } from 'src/objects/ObjectsForReports/ABeans';

@Component({
  selector: 'app-report-mas-sus',
  templateUrl: './report-mas-sus.component.html',
  styleUrls: ['./report-mas-sus.component.css']
})
export class ReportMasSusComponent implements OnInit {
  fechaI!:string
  fechaF!:string
 myForm!:FormGroup
  archivoPdf!:string
  // MAS VARIABLES
  adminbeans!:Array<ABeans>
  adminbean!:ABeans
  sucrip!:Suscripcion
  total:number=0
  totalfinal:number=0;
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
    this.MenuAdminService.getMoreSusReportHtml(this.myForm.value.fechaI,this.myForm.value.fechaF).subscribe((created:ABeans[])=>{
      console.log(created)
      if(created==null){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
          this.adminbeans=created
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
    this.MenuAdminService.getMoreSusReport(this.myForm.value.fechaI,this.myForm.value.fechaF).subscribe((created:Respuesta)=>{
      console.log(created.respuesta)
      if(created.respuesta=="no"){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
         this.archivoPdf= "data:application/pdf;base64,"+created.respuesta
         console.log("aqui jeje"+this.archivoPdf)
      }
     
    })
  }
  modTotal(numero:number){
    console.log("---"+numero)
    this.totalfinal+=numero
  }
  getTotal():number{
    this.total=this.totalfinal
    this.totalfinal=0
    return this.total
  }
  setTotal(numero:number){
    this.total= numero
  }


}
