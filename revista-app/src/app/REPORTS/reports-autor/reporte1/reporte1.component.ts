import { MenuUserService } from './../../../../../service/menu-user.service';
import { ServiceHomeService } from 'service/service-home.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/objects/Respuesta';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class REPORTE1Component implements OnInit {

  constructor(private MenuAutorService:MenuAutorService, private FormBuilder:FormBuilder,
    private ServiceHomeService:ServiceHomeService, private MenuUserService:MenuUserService) { }
//FORMULARIO
myForm!:FormGroup
myForm2!:FormGroup
//VARIABLE DEL PDF
archivoPdf!:string
//DATOS PARA EL FORMULARIO
fechaI!:string
fechaF!:string
//botones
export1:number=0
  ngOnInit(): void {
    this.ServiceHomeService.span=0;
    this.myForm=this.FormBuilder.group({
      fechaI:[null,Validators.required],
      fechaF:[null,Validators.required],
    })
    this.myForm2=this.FormBuilder.group({
      name:[null,Validators.required],
    })
  }
  getOp():number{
    return this.export1
  }
  pedirReporte(){
    if(this.myForm.value.fechaI==null){
      this.myForm.value.fechaI="1900-01-01"
    }
    if(this.myForm.value.fechaF==null){
      this.myForm.value.fechaF="2030-01-01"
    }
    this.MenuAutorService.getComenReport(this.myForm.value.fechaI,this.myForm.value.fechaF).subscribe((created:Respuesta)=>{
      console.log(created.respuesta)
      if(created.respuesta=="no"){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
         this.archivoPdf= "data:application/pdf;base64,"+created.respuesta
         console.log(this.archivoPdf)
      }
     
    })
  }
  pedirReporteGeneral(){
    this.MenuAutorService.getComenReport("1900-01-30","2090-12-12").subscribe((created:Respuesta)=>{
      console.log(created.respuesta)
      if(created.respuesta=="no"){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
         this.archivoPdf= "data:application/pdf;base64,"+created.respuesta
         console.log(this.archivoPdf)
      }
     
    })
  }
  pedirRepForName(){
    this.MenuAutorService.getComenReportForRev(this.myForm2.value.name).subscribe((created:Respuesta)=>{
      console.log(created.respuesta)
      if(created.respuesta=="no"){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
         this.archivoPdf= "data:application/pdf;base64,"+created.respuesta
         console.log(this.archivoPdf)
      }
     
    })
  }
  
}
