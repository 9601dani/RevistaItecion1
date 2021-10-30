import { Usuario } from './../../../../objects/ObjectsForReports/Usuario';
import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { ServiceHomeService } from 'service/service-home.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Respuesta } from 'src/objects/Respuesta';
import { ABeans } from 'src/objects/ObjectsForReports/ABeans';

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
  opcion:number=0;
  adminbeans!:Array<ABeans>
  adminbean!:ABeans
  sucrip!:Usuario
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
    this.MenuAutorService.getLikeReportHtml().subscribe((created:ABeans[])=>{
      console.log(created)
      if(created==null){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
        this.opcion=1
        this.adminbeans=created
        this.archivoPdf=""
      }
     
    })
  }
  pedirReporte2(){
    this.MenuAutorService.getLikeReport().subscribe((created:Respuesta)=>{
      console.log(created)
      if(created.respuesta=="no"){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
         this.archivoPdf= "data:application/pdf;base64,"+created.respuesta
         console.log("aqui jeje"+this.archivoPdf)
      }
     
    })
  }
  
  pedirRepForName(){
    this.MenuAutorService.getLikeNameReportHtml(this.myForm2.value.name).subscribe((created:ABeans[])=>{
      console.log(created)
      if(created==null){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
        this.adminbeans=created
        this.opcion=2
        this.archivoPdf=""
      }
     
    })
  }
  pedirRepForName2(){
    this.MenuAutorService.getLikeNameReport(this.myForm2.value.name).subscribe((created:Respuesta)=>{
      console.log(created)
      if(created.respuesta=="no"){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
         this.archivoPdf= "data:application/pdf;base64,"+created.respuesta
         console.log("aqui jeje"+this.archivoPdf)
      }
     
    })
  }

  getOpcion():number{
    return this.opcion
  }  

}
