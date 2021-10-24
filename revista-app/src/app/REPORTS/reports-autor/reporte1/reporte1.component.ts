import { ServiceHomeService } from 'service/service-home.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/objects/Respuesta';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class REPORTE1Component implements OnInit {

  constructor(private MenuAutorService:MenuAutorService, private FormBuilder:FormBuilder,
    private ServiceHomeService:ServiceHomeService) { }
//FORMULARIO
myForm!:FormGroup
//VARIABLE DEL PDF
archivoPdf!:string
//DATOS PARA EL FORMULARIO
fechaI!:string
fechaF!:string
  ngOnInit(): void {
    this.ServiceHomeService.span=0;
    this.myForm=this.FormBuilder.group({
      fechaI:[null,Validators.required],
      fechaF:[null,Validators.required],
    })
  }
  pedirReporte(){
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
  
}
