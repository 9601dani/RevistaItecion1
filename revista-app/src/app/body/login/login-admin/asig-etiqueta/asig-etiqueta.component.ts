import { Respuesta } from './../../../../../objects/Respuesta';
import { MenuAdminComponent } from './../../../../menu/menu-admin/menu-admin.component';
import { ObtenerInfoUserService } from './../../../../../../service/obtener-info-user.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Etiqueta } from 'src/objects/Etiqueta';
import { MenuAdminService } from 'service/menu-admin.service';

@Component({
  selector: 'app-asig-etiqueta',
  templateUrl: './asig-etiqueta.component.html',
  styleUrls: ['./asig-etiqueta.component.css']
})
export class AsigEtiquetaComponent implements OnInit {
formEtiqueta!:FormGroup;
formUpdate!:FormGroup
etiq!:Etiqueta;
et_pas!:string;
  constructor(private FormBuilder:FormBuilder, private save:ObtenerInfoUserService,
    private service: MenuAdminService) { }
etiquetas!:Array<Etiqueta>;
eti!:Etiqueta
respuesta!:Respuesta

nameetiqueta!:string
mostrar:number=0;

  ngOnInit(): void {
    this.getEtiqueta()
    this.formEtiqueta= this.FormBuilder.group({
      nameEtiqueta:[null,Validators.required],
    })
    this.formUpdate= this.FormBuilder.group({
      name:[null,Validators.required],
    })
  }

  saveEtiqueta(){
    if(this.formEtiqueta.valid){
      this.save.saveEtiqueta(new Etiqueta(this.formEtiqueta.value.nameEtiqueta))
      .subscribe((created:Etiqueta)=>{
        console.log(created);
        if(created!=null){
          alert("Se Guardo Correctamente"+ created.nombre_etiqueta);
          this.etiq=created;
          this.service.Opcion='';
        }else{
          alert("NO SE PUDO GUARDAR, PARECE QUE YA EXISTE LA ETIQUETA");
          
        }
      },(error:any)=>{
        alert("ERROR AL GUARDAR "+ error);
      });
     }
  }

  updateEtiqueta(name:String){
   this.nameetiqueta=name.toString();
   this.et_pas=name.toString();
   this.mostrar=1;
  }
  getMostrar():number{
    return this.mostrar;
  }
  updateEtiquetaFinal(){
    this.save.updateEtiqueta(new Etiqueta(this.nameetiqueta.toString()),this.et_pas).subscribe((created:Respuesta)=>{
      console.log(created);
      if(created!=null){
        if(created.respuesta=="yes"){
          alert("SE ACTUALIZO");
          this.service.Opcion='';
        }else{
          alert("NO SE ELIMINO");
        }
      }else{
        alert("NO SE ELIMINO");
      }

    },(error:any)=>{
      alert("NO SE ELIMINO");
    });

    this.mostrar=0;

  }

  deleteEtiqueta(name:String){
    this.save.deleteEtiqueta(name.toString()).subscribe((created:Respuesta)=>{
      console.log(created);
      if(created!=null){
        if(created.respuesta=="yes"){
          alert("SE ELIMINO");
          this.service.Opcion='';
        }else{
          alert("NO SE ELIMINO");
        }
      }else{
        alert("NO SE ELIMINO");
      }

    },(error:any)=>{
      alert("NO SE ELIMINO");
    });
  }
  getEtiqueta(){
    this.save.getEtiqueta().subscribe((created:Etiqueta[])=>{
       console.log(created);
       if(created!=null){
        this.etiquetas=created;
       }else{
        alert("NO HAY ETIQUETAS PARA ASIGNAR");
       }
 
     },(error:any)=>{
      alert("NO HAY ETIQUETAS PARA ASIGNAR");
     });
   }
  }

