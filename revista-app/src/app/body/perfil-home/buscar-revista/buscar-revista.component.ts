import { DomSanitizer } from '@angular/platform-browser';
import { MenuUserService } from './../../../../../service/menu-user.service';
import { Categoria } from './../../../../objects/Categoria';
import { ObtenerInfoUserService } from './../../../../../service/obtener-info-user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Etiqueta } from 'src/objects/Etiqueta';
import { RevistaForAdmin } from 'src/objects/RevistaForAdmin';
import { RevUser } from 'src/objects/RevUser';
import { Suscrip_E } from 'src/objects/ENUMS/Suscrip_E';
import { User } from 'src/objects/User';
import { Respuesta } from 'src/objects/Respuesta';
import { formatDate } from '@angular/common';
import { Suscripcion } from 'src/objects/Suscripcion';
import { Me_Gusta_Suscripcion } from 'src/objects/ENUMS/Me_Gusta_Suscripcion';
import { Estado_Sus } from 'src/objects/ENUMS/Estado_Sus';
import { Porcentaje } from 'src/objects/Porcentaje';
import { Recaudacion } from 'src/objects/Recaudacion';

@Component({
  selector: 'app-buscar-revista',
  templateUrl: './buscar-revista.component.html',
  styleUrls: ['./buscar-revista.component.css']
})
export class BuscarRevistaComponent implements OnInit {
  dangerousVideoUrl!: string;
  videoUrl: any;

  constructor(private FormBuilder:FormBuilder, private ObtenerInfoUserService:ObtenerInfoUserService,
    private MenuUserService:MenuUserService, private sanitizer:DomSanitizer) { }
//control de form
formControl!:number;
formControl2!:number;
//formulario de nombre
myForm!:FormGroup
myForm2!:FormGroup
//etiquetas a mostrar
categorias!:Array<Categoria>
cat!:Categoria;
//revistas completas
revista!: Array<RevistaForAdmin>;
rev1!: RevistaForAdmin;
//info etiquetas de revista
etiquetas!:Array<Etiqueta>
et!:Etiqueta;
//revitas del usuario
//Revistas para usuario
revis!: Array<RevUser>;
revi!: RevUser;
//datos necesarios para mostrar
nameRev!:string;
//opciones para ver o no ver
opcio!: number;
id_revista!:number
valor_sus!:number
aceptarSus!:Suscrip_E
userName:User=JSON.parse(<string>localStorage.getItem("userS"));
comparador!:Suscrip_E;
sus!:number;
time!:number
total!:number
pagar!:number
fecha_final!:Date;
fecha_in!:string;
dat!:Date
//formulario
myFormSus!:FormGroup;
//revista

//respuesta 
respuesta!:Respuesta
objPorcentaje!:Porcentaje[]
porcentaje!:number
nom_autor!:string
  ngOnInit(): void {
    this.getPorcentaje();
    this.myForm = this.FormBuilder.group({
      name: [null, Validators.required],
    })
    this.myForm2 = this.FormBuilder.group({
      categoria: [null, Validators.required],
    })
    this.myFormSus=this.FormBuilder.group({
      fechaI:[null,Validators.required],
      tiempo:[null,Validators.required],
      total:[null,Validators.required]
    })
  }
setForm(option:number){
  if(option==2){
    this.getCategoria();
  }
  this.formControl=option;
}
getForm():number{
  return this.formControl;
}
setForm2(option:number){
  this.formControl2=option;
}
getForm2():number{
  return this.formControl2;
}
setMod(op: number) {
  this.opcio = op;
}
getMod(): number {
  return this.opcio;
}

serchForName(){
  this.formControl=0
  this.formControl2=0;
  this.opcio=0;
  this.MenuUserService.getRevistasForName(this.myForm.value.name).subscribe((created: RevistaForAdmin[]) => {
    console.log(created);
    if (created != null) {
      this.revista = created;
      this.setForm2(1);
    } else {
      alert("NO HAY REVISTAS CON ESE NOMBRE");
    }

  }, (error: any) => {
    alert("ERROR AL GUARDAR" + error);
  });;

}
serchForCategoria(){
  this.formControl=0
  this.formControl2=0;
  this.opcio=0;
  console.log(this.myForm2.value.categoria)
  this.formControl=0
  this.formControl2=0;
  this.opcio=0;
  this.MenuUserService.getRevistasForCategoria(this.myForm2.value.categoria).subscribe((created: RevistaForAdmin[]) => {
    console.log(created);
    if (created != null) {
      this.revista = created;
      this.setForm2(1);
    } else {
      alert("NO HAY REVISTAS CON ESTA CATEGORIA AUN");
    }

  }, (error: any) => {
    alert("NO HAY REVISTAS CON ESTA CATEGORIA AUN");
  });;

}

getCategoria(){
  this.ObtenerInfoUserService.getCategoria().subscribe((created:Categoria[])=>{
    console.log(created);
    if(created!=null){
     this.categorias=created;
    }else{
      alert("ERROR AQUI");
    }

  },(error:any)=>{
    alert("ERROR AL GUARDAR"+ error);
  });
}

verPre(id_revista: number,nombre:string, costo:number, sus:Suscrip_E) {
  this.valor_sus=costo
  this.id_revista=id_revista;
  this.aceptarSus=sus;
  this.MenuUserService.getInfoRevUser(id_revista).subscribe((created: RevUser) => {
    console.log(created);
    if (created != null) {
      this.revi = created;
      this.etiquetas=this.revi.etiquetas;
      this.nameRev=nombre;
      this.opcio=1;
      this.valor_sus=costo;
      this.nom_autor= this.revi.nombre_usuario
    } else {
      alert("ERROR AQUI");
    }

  }, (error: any) => {
    alert("ERROR AL GUARDAR" + error);
  });;

  console.log(id_revista)
}
suscribirse(){
  this.sus=1;
  this.total=this.valor_sus*1;
}
suscribirseFi(){
  //fechas
  this.fecha_in=this.myFormSus.value.fechaI
  this.fecha_final= this.devFechaFinal(this.fecha_in)

  console.log("fecha inicial "+this.fecha_in)
  console.log("fecha final "+ formatDate(this.fecha_final,'yyyy-MM-dd','en-US'))
  //datos varios
  console.log("me voy a pagar a finalmente"+this.id_revista)
  console.log("con un costo de "+this.total)
  console.log("yo " + this.userName.nombre_usuario)
  this.MenuUserService.saveSuscripcion(new Suscripcion(this.total,this.fecha_in,formatDate(this.fecha_final,'yyyy-MM-dd','en-US'),Me_Gusta_Suscripcion.NO_DIO_LIKE,Estado_Sus.ACTIVA,this.userName.nombre_usuario,this.id_revista)).subscribe((created: Respuesta) => {
    console.log(created);
    if (created != null) {
      this.respuesta=created
      if(this.respuesta.respuesta=="se_guardo"){
        this.MenuUserService.saveRecaudacion(new Recaudacion(this.nameRev,this.total-(this.total*(this.porcentaje/100)),(this.total*(this.porcentaje/100)),this.fecha_in,this.userName.nombre_usuario,this.nom_autor)).subscribe((created:Respuesta)=>{
          console.log(created);
          this.respuesta=created
          if(this.respuesta.respuesta=="se_guardo"){
            alert("SE GUARDO CORRECTAMENTE");
            this.MenuUserService.Op='perfil'
          }else if(this.respuesta.respuesta=="no_se_guardo"){
            alert("NO SE GUARDO INTENTA DE NUEVO");
            this.MenuUserService.Op='perfil'
          }
        })

        this.MenuUserService.Op='perfil'
      }else if(this.respuesta.respuesta=="no_se_guardo_ya"){
        alert("PARECE QUE YA ESTAS SUSCRITO");
        this.MenuUserService.Op='perfil'
      }else{
        alert("NO SE PUDO GUARDAR INTENTALO DE NUEVO");
        this.MenuUserService.Op='perfil'
      }
    } else {
      alert("NO SE PUDO GUARDAR INTENTALO DE NUEVO");
      this.MenuUserService.Op='perfil'
    }

  }, (error: any) => {
    alert("ERROR AL GUARDAR" + error);
  });;



}

getSus(opc:Suscrip_E):number{
  if(opc==Suscrip_E.ACEPTA_SUSCRIPCION){
    return 1;
  }
  this.sus=0;
  return 0;
}
getPagar():number{

  return this.pagar;
}
getMoreSus():number{
  return this.sus;
}
getCostoTotal(){
  this.total=this.valor_sus*this.myFormSus.value.tiempo
  console.log(this.total+"sto pagata")
  this.pagar=1;
}

updateVideoUrl(id: string) {
  // Appending an ID to a YouTube URL is safe.
  // Always make sure to construct SafeValue objects as
  // close as possible to the input data so
  // that it's easier to check if the value is safe.
  this.dangerousVideoUrl = 'data:image/jpeg;base64,' + id;
  this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
}

devFechaFinal(fechainicial:string):Date{
let da=  new Date(formatDate(fechainicial,'yyyy-MM-dd','en-US'))
let fi= new Date(da.getUTCFullYear(),(da.getUTCMonth())+this.myFormSus.value.tiempo,da.getUTCDate())
  return fi 
}
getPorcentaje(){
  this.ObtenerInfoUserService.getPorcentaje().subscribe((created:Porcentaje[])=>{
    console.log(created);
    if(created!=null){
     this.objPorcentaje=created;
     this.porcentaje= this.objPorcentaje[0].porcentaje;
    }else{
      alert("actualmente no se ah asignado ningun porcentaje");
    }

  },(error:any)=>{
    alert("ERROR AL GUARDAR"+ error);
  });
}

}
