import { Tipo_Anuncio } from './../../../../../objects/Tipo_Anuncio';
import { MenuAdminService } from 'service/menu-admin.service';
import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/objects/Respuesta';

@Component({
  selector: 'app-mod-cost-anun',
  templateUrl: './mod-cost-anun.component.html',
  styleUrls: ['./mod-cost-anun.component.css']
})
export class ModCostAnunComponent implements OnInit {
tiposAnuncios!:Array<Tipo_Anuncio>
tipoAnuncio!:Tipo_Anuncio
  constructor(private MenuAdminService:MenuAdminService) { }
tipo!:string;
costo!:number;
opcion:number=0;
  ngOnInit(): void {
    this.getTipos()
  }
  getTipos(){
    this.MenuAdminService.getCostos().subscribe((created:Tipo_Anuncio[])=>{
      if(created!=null){
        this.tiposAnuncios=created
      }else{
        alert("no hay informacion")
        this.MenuAdminService.Opcion='';
      }
    },(error:any)=>{
      alert("no hay informacion")
      this.MenuAdminService.Opcion='';
    })
  }
  getOpcion():number{
    return this.opcion
  }

  update(nombre_tipo:string,costo_dia:number){
    this.tipo=nombre_tipo
    this.costo=costo_dia
    this.opcion=1;
  }
  updateFinal(){
    this.MenuAdminService.updateCostoTipo(this.tipo,this.costo).subscribe((created:Respuesta)=>{
      if(created!=null){
        if(created.respuesta=='yes'){
          alert("SE ACTUALIZO")
        this.MenuAdminService.Opcion='';
        }else{
          alert("NO SE PUDO ACTUALIZAR")
          this.MenuAdminService.Opcion='';
        }
        
      }else{
        alert("NO SE PUDO ACTUALIZAR")
        this.MenuAdminService.Opcion='';
      }
      
    },(error:any)=>{
      alert("NO SE PUDO ACTUALIZAR")
      this.MenuAdminService.Opcion='';
    })
  }

}
