import { OtherMagazineBeans } from './../../../../objects/ObjectsForReports/OtherMagazineBeans';
import { ABeans } from './../../../../objects/ObjectsForReports/ABeans';
import { MenuAdminService } from 'service/menu-admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Respuesta } from 'src/objects/Respuesta';
import { GananciaBean } from 'src/objects/ObjectsForReports/GananciaBean';
import { Suscripcion } from 'src/objects/Suscripcion';

@Component({
  selector: 'app-ganancia-revista',
  templateUrl: './ganancia-revista.component.html',
  styleUrls: ['./ganancia-revista.component.css']
})
export class GananciaRevistaComponent implements OnInit {
  fechaI!:string
  fechaF!:string
  myForm!:FormGroup
  archivoPdf!:string

  ABeansArray!:Array<GananciaBean>;
  ABeanArray!:GananciaBean;
  othermagas!:Array<OtherMagazineBeans>
  othermaga!:OtherMagazineBeans
  sucri!:Suscripcion
  constructor(private FormBuilder:FormBuilder,private MenuAdminService:MenuAdminService) { }

  ngOnInit(): void {
    this.myForm=this.FormBuilder.group({
      fechaI:[null,Validators.required],
      fechaF:[null,Validators.required],
    })
  }
  pedirReporte(){
    this.MenuAdminService.getGananciasReport(this.myForm.value.fechaI,this.myForm.value.fechaF).subscribe((created:Respuesta)=>{
      console.log(created.respuesta)
      if(created.respuesta=="no"){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
         this.archivoPdf= "data:application/pdf;base64,"+created.respuesta
         console.log("aqui jeje"+this.archivoPdf)
         
      }
     
    })
  }
  pedirReporteHtml(){
    this.MenuAdminService.getGananciasReport1(this.myForm.value.fechaI,this.myForm.value.fechaF).subscribe((created:GananciaBean[])=>{
      console.log(created)
      if(created==null){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
         this.ABeansArray=created
         this.archivoPdf=""
      }
     
    })
  }

}
