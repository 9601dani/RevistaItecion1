import { MenuAdminService } from 'service/menu-admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Respuesta } from 'src/objects/Respuesta';

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
  constructor(private FormBuilder:FormBuilder, private MenuAdminService:MenuAdminService) { }

  ngOnInit(): void {
    this.myForm=this.FormBuilder.group({
      fechaI:[null,Validators.required],
      fechaF:[null,Validators.required],
    })
  }
  pedirReporte(){
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
  pedirReporteGeneral(){
    this.MenuAdminService.getMoreSusReport("1900-01-01","2090-12-31").subscribe((created:Respuesta)=>{
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
