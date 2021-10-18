import { MenuUserService } from 'service/menu-user.service';
import { MenuUserComponent } from 'src/app/menu/menu-user/menu-user.component';
import { EtiquetaUser } from './../../../../objects/EtiquetaUser';
import { ObtenerInfoUserService } from './../../../../../service/obtener-info-user.service';
import { Etiqueta } from 'src/objects/Etiqueta';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { User } from 'src/objects/User';

@Component({
  selector: 'app-registrar-etiqueta',
  templateUrl: './registrar-etiqueta.component.html',
  styleUrls: ['./registrar-etiqueta.component.css']
})
export class RegistrarEtiquetaComponent implements OnInit {
  myFormAsig!:FormGroup;
  etiquetas!:Array<Etiqueta>;
  etiq!:Etiqueta;
  userJ!:User;
  userFinal!:String;
  //otras variables
formControl2!:number;
//for user
etiquetasU!:Array<Etiqueta>;
etiqU!:Etiqueta;
//more for user
nameEt!:String

  constructor(private FormBuilder:FormBuilder, private ObtenerInfoUserService: ObtenerInfoUserService,
    private MenuUserService:MenuUserService) { }

  ngOnInit(): void {
    this.getInfoEtiqueta();
    this.myFormAsig=this.FormBuilder.group({
      etiquetaN:[null,Validators.required],
      user:[null,Validators.required]
    })
  }

  getInfoEtiqueta(){
    this.ObtenerInfoUserService.getEtiqueta().subscribe((created:Etiqueta[])=>{
       console.log(created);
       if(created!=null){
        this.etiquetas=created;
       }else{
         alert("ERROR AQUI");
       }
 
     },(error:any)=>{
       alert("ERROR AL GUARDAR"+ error);
     });
   }
   CambiarPagina(op:string){
    this.MenuUserService.Op=op;
  }

  saveEtiquetaUser(){
    this.userJ= JSON.parse(<string>localStorage.getItem('userS'));
    this.userFinal=this.userJ.nombre_usuario;
    console.log(this.userFinal+" aqui nene");
    this.ObtenerInfoUserService.getEtiquetaUser(new EtiquetaUser(this.myFormAsig.value.etiquetaN,this.userFinal)).subscribe((created:EtiquetaUser)=>{
      console.log(created);
      if(created!=null){
       alert("SE GUARDO ETIQUETA");
      }else{
        alert("PARECE QUE YA TIENE ESTA ETIQUETA ASIGNADA");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });
  }

  getMyEtiquetas(){
    this.userJ= JSON.parse(<string>localStorage.getItem('userS'));
    this.userFinal=this.userJ.nombre_usuario;
    this.ObtenerInfoUserService.getMyEtiqueta(this.userJ.nombre_usuario).subscribe((created:Etiqueta[])=>{
       console.log(created);
       if(created!=null){
        this.etiquetasU=created;
        this.formControl2=1;
       }else{
         alert("NO TIENES ETIQUETAS ASIGNADAS");
       }
 
     },(error:any)=>{
       alert("NO TIENES ETIQUETAS ASIGNADAS");
     });
   }

   setForm2(option:number){
    this.formControl2=option;
  }
  getForm2():number{
    return this.formControl2;
  }
  deleteMyEtiqueta(et:String){
    this.userJ= JSON.parse(<string>localStorage.getItem('userS'));
    this.ObtenerInfoUserService.deleteMyEtiqueta(this.userJ.nombre_usuario,et.toString()).subscribe((created:Etiqueta)=>{
      console.log(created);
      if(created!=null){
        if(created.nombre_etiqueta=="yes"){
          alert("SE ELIMINO EXITOSAMENTE")
          this.CambiarPagina('perfil')
          
        }else{
          alert("NO SE PUDO ELIMINAR")
        }

       
      }else{
        alert("LO SENTIMOS NO SE PUDO ELIMINAR");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });
  }

}

