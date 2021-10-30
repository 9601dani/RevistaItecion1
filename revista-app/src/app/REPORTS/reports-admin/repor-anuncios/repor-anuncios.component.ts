import { MenuAdminService } from 'service/menu-admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Respuesta } from 'src/objects/Respuesta';
import { Anuncio } from 'src/objects/Anuncio';

@Component({
  selector: 'app-repor-anuncios',
  templateUrl: './repor-anuncios.component.html',
  styleUrls: ['./repor-anuncios.component.css']
})
export class ReporAnunciosComponent implements OnInit {
  myForm!:FormGroup
  myForm2!:FormGroup
  //VARIABLE DEL PDF
  archivoPdf!:string
  //DATOS PARA EL FORMULARIO
  fechaI!:string
  fechaF!:string
  //MORE VARIABLES
  anuncios!:Array<Anuncio>
  anuncio!:Anuncio
  total:number=0;
  yes:number=0;
  constructor(private FormBuilder:FormBuilder, private MenuAdminService:MenuAdminService) { }

  ngOnInit(): void {
  }
  pedirReporte(){
    this.MenuAdminService.getMAnunReportHtml().subscribe((created:Anuncio[])=>{
      console.log(created)
      if(created==null){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
        
        this.anuncios=created
        this.yes=1
      }
     
    })
  }
  pedirReporteHtml(){
    this.MenuAdminService.getMAnunReport().subscribe((created:Respuesta)=>{
      console.log(created.respuesta)
      if(created.respuesta=="no"){
        alert("ALGO SALIO MAL REVISA LOS DATOS INGRESADOS")
      }else{
         this.archivoPdf= "data:application/pdf;base64,"+created.respuesta
         console.log(this.archivoPdf)
      }
     
    });
  }

  getTotal():number{
    return this.total
  };
  sumTotal(num:number){
    this.total+=num
  }

  getYes():number{
    return this.yes
  }

}
