import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Respuesta } from 'src/objects/Respuesta';
import { GananciaBean } from 'src/objects/ObjectsForReports/GananciaBean';
import { OtherMagazineBeans } from 'src/objects/ObjectsForReports/OtherMagazineBeans';
import { Suscripcion } from 'src/objects/Suscripcion';

@Component({
  selector: 'app-report4',
  templateUrl: './report4.component.html',
  styleUrls: ['./report4.component.css']
})
export class Report4Component implements OnInit {

  constructor(private FormBuilder:FormBuilder, private MenuAutorService:MenuAutorService) { }
  fechaI!:string
  fechaF!:string
 myForm!:FormGroup
 archivoPdf!:string
 //MORE VARIABLES
 ABeansArray!:Array<GananciaBean>;
  ABeanArray!:GananciaBean;
  othermagas!:Array<OtherMagazineBeans>
  othermaga!:OtherMagazineBeans
  sucri!:Suscripcion
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
    this.MenuAutorService.getGananciasReportHtml(this.myForm.value.fechaI,this.myForm.value.fechaF).subscribe((created:GananciaBean[])=>{
      console.log(created)
      if(created==null){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
        this.ABeansArray=created
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
    this.MenuAutorService.getGananciasReport(this.myForm.value.fechaI,this.myForm.value.fechaF).subscribe((created:Respuesta)=>{
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
