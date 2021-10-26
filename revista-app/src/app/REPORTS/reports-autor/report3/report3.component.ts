import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { ServiceHomeService } from 'service/service-home.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Respuesta } from 'src/objects/Respuesta';

@Component({
  selector: 'app-report3',
  templateUrl: './report3.component.html',
  styleUrls: ['./report3.component.css']
})
export class Report3Component implements OnInit {
  myForm!:FormGroup
  myForm2!:FormGroup
  //VARIABLE DEL PDF
  archivoPdf!:string
  //DATOS PARA EL FORMULARIO
  fechaI!:string
  fechaF!:string
  //botones
  export1:number=0
  constructor(private ServiceHomeService:ServiceHomeService, private FormBuilder:FormBuilder, private MenuAutorService:MenuAutorService) { }

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
  pedirReporte(){
    this.MenuAutorService.getLikeReport().subscribe((created:Respuesta)=>{
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
    this.MenuAutorService.getLikeNameReport(this.myForm2.value.name).subscribe((created:Respuesta)=>{
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
