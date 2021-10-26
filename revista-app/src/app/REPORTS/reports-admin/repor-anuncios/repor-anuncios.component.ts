import { MenuAdminService } from 'service/menu-admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Respuesta } from 'src/objects/Respuesta';

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
  constructor(private FormBuilder:FormBuilder, private MenuAdminService:MenuAdminService) { }

  ngOnInit(): void {
  }
  pedirReporte(){
    this.MenuAdminService.getMAnunReport().subscribe((created:Respuesta)=>{
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
