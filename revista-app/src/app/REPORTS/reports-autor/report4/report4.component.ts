import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Respuesta } from 'src/objects/Respuesta';

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
