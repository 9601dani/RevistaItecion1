import { ServiceHomeService } from 'service/service-home.service';
import { ObtenerInfoUserService } from './../../../../../service/obtener-info-user.service';
import { ComentarioMostrar } from 'src/objects/ComentarioMostrar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comentario_E } from './../../../../objects/ENUMS/Comentario_E';
import { Respuesta } from './../../../../objects/Respuesta';
import { Suscripcion } from './../../../../objects/Suscripcion';
import { Me_Gusta_Suscripcion } from './../../../../objects/ENUMS/Me_Gusta_Suscripcion';
import { Me_Gusta_E } from './../../../../objects/ENUMS/Me_Gusta_E';
import { MenuUserService } from './../../../../../service/menu-user.service';
import { Component, OnInit } from '@angular/core';
import { RevistaForAdmin } from 'src/objects/RevistaForAdmin';
import { User } from 'src/objects/User';
import { Comentario } from 'src/objects/Comentario';
import { formatDate } from '@angular/common';
import { UserComplete } from 'src/objects/UserComplete';
import { UserType } from 'src/objects/UserType';


@Component({
  selector: 'app-mis-suscripciones',
  templateUrl: './mis-suscripciones.component.html',
  styleUrls: ['./mis-suscripciones.component.css']
})
export class MisSuscripcionesComponent implements OnInit {

  constructor(private MenuUserService:MenuUserService, private FormBuilder:FormBuilder, 
    private ObtenerInfoUserService:ObtenerInfoUserService, private ServiceHomeService:ServiceHomeService) { }
  revista!: Array<RevistaForAdmin>;
  rev1!: RevistaForAdmin;
  respuesta!:Respuesta
  //infor usuario
  userName:User=JSON.parse(<string>localStorage.getItem("userS"));
  //ver archivo
  previsualizacion!:string
  opcio!:number;
  //aceptar o no me gusta
  aceptar_me_gusta:number=0;
  coment:number=0;
  comentFinal:number=0;
  ya_dio_like!:number;
  id_rev!:number
  id_sus!:number
  //infoSuscripcion of user
  suscripcion!:Suscripcion
  //saveComentario
  formComentario!:FormGroup;
  //comentarios que se veran
  mostrarComents:number=0;
  comentariosRev!:Array<ComentarioMostrar>
  comentariosRev2!:ComentarioMostrar
  fechaComentario!:string;
  autor!:UserComplete
  photo!:string; 
  mostrarAutor:number=0;
  ngOnInit(): void {
    this.ServiceHomeService.span=1;
    this.getRevistas();
    this.formComentario=this.FormBuilder.group({
      comentario:[null,Validators.required],
      fecha_comentario:[null,Validators.required],
    })
  }

  getRevistas(){
    this.MenuUserService.getRevistasSus(this.userName.nombre_usuario).subscribe((created: RevistaForAdmin[]) => {
      console.log(created);
      if (created != null) {
        this.revista = created;

      } else {
        alert("NO ESTAS SUSCRITO A NINGUNA REVISTA");
      }

    }, (error: any) => {
      alert("NO ESTAS SUSCRITO A NINGUNA REVISTA");
    });;

  }
  setMod(op: number) {
    this.opcio = op;
  }
  getMod(): number {
    return this.opcio;
  }
  getMg():number{
    return this.aceptar_me_gusta;
  }
  getLike():number{
    return this.ya_dio_like;
  }
  getComen():number{
    return this.coment;
  }
  getComentFinal():number{
    return this.comentFinal
  }
  getMostrarComents():number{
    return this.mostrarComents;
  }
  getMostrarAutor():number{
    return this.mostrarAutor;
  }

  verPdf(archivo:string, me_gusta:Me_Gusta_E, id_revista:number, come:Comentario_E){
    console.log(archivo);
    this.id_rev=id_revista
    this.previsualizacion=archivo;
    if(me_gusta==Me_Gusta_E.ACEPTA_LIKE){
      this.aceptar_me_gusta=0;
    }else{
      this.aceptar_me_gusta=1;
    }
    if(come==Comentario_E.ACEPTA_COMENTARIO){
      this.coment=0;
    }else{
      this.coment=1;
    }
    this.MenuUserService.infoSus(this.userName.nombre_usuario, id_revista).subscribe((created:Suscripcion)=>{
      console.log(created);
      if (created != null) {
        this.suscripcion = created;
        console.log(this.suscripcion.id_suscripcion)
        this.id_sus=this.suscripcion.id_suscripcion
        if(this.suscripcion.me_gusta==Me_Gusta_Suscripcion.DIO_LIKE){
          this.ya_dio_like=1
        }else{
          this.ya_dio_like=0;
        }
        this.mostrarAutor=0;

      } else {
        this.previsualizacion=""
        this.mostrarComents=0;
        alert("TU SUSCRIPCION YA VENCIO ");
        
      }

    }, (error: any) => {
      alert("NO ESTAS SUSCRITO A NINGUNA REVISTA");
    })
    this.opcio = 3;
    this.mostrarComents=0;

  }
  

  darMeGusta(){
    console.log("dare like")
    this.MenuUserService.darLike( this.id_rev, this.userName.nombre_usuario).subscribe((created:Respuesta)=>{
      console.log(created);
      if (created != null) {
        this.respuesta = created;
        if(this.respuesta.respuesta=="yes"){
          alert("SE DIO LIKE")
          this.MenuUserService.Op='perfil'
        }else{
          alert("NO SE PUDO DAR LIKE")
        }

      } else {
        alert("NO SE PUDO DAR LIKE")
      }

    }, (error: any) => {
      alert("NO SE PUDO DAR LIKE :(")
    })
  }

  quitarMeGusta(){
    console.log("quitare mi like")
    this.MenuUserService.quitarLike( this.id_rev, this.userName.nombre_usuario).subscribe((created:Respuesta)=>{
      console.log(created);
      if (created != null) {
        this.respuesta = created;
        if(this.respuesta.respuesta=="yes"){
          alert("SE QUITO EL LIKE")
          this.MenuUserService.Op='perfil'
        }else{
          alert("NO SE PUDO DAR LIKE")
        }

      } else {
        alert("NO SE PUDO DAR LIKE")
      }

    }, (error: any) => {
      alert("NO SE PUDO DAR LIKE :(")
    })
  }

  comentar(){
    this.comentFinal=1;
  }
  saveComentario(){
    console.log("mandare ese id_sus"+this.id_sus)
    this.MenuUserService.saveComentario(new Comentario(0,this.formComentario.value.comentario,this.formComentario.value.fecha_comentario,this.id_rev,this.id_sus) ).subscribe((created:Respuesta)=>{
      console.log(created);
      if (created != null) {
        this.respuesta = created;
        if(this.respuesta.respuesta=="yes"){
          alert("SE AGREGO EL COMENTARIO")
          this.MenuUserService.Op='perfil'
        }else{
          alert("NO SE PUDO AGREGAR EL COMENTARIO")
        }

      } else {
        alert("NO SE PUDO AGREGAR EL COMENTARIO")
      }

    }, (error: any) => {
      alert("NO SE PUDO AGREGAR EL COMENTARIO")
    })

  }

  verComentarios(id_revista:number){
    console.log("voy a mostrar los comentarios de "+id_revista)
    this.MenuUserService.getComentarios(id_revista).subscribe((created:ComentarioMostrar[])=>{
      console.log(created);
      if (created != null) {
        this.comentariosRev = created;
        this.mostrarComents=1;
        this.mostrarAutor=0;
        this.previsualizacion="";
      } else {
        alert("NO HAY COMENTARIOS PARA ESTA REVISTA")
        this.mostrarComents=0;
      }

    }, (error: any) => {
      alert("NO HAY COMENTARIOS PARA ESTA REVISTA")
      this.mostrarComents=0;
    })


  }

  public formarearFecha(fecha:string):string{
    let da=  formatDate(fecha,'dd-MM-yyyy','en-US')
    return da
  }
  public formatearFecha(fecha:Date):string{
    let fechaI= fecha.toString()
    let da=  formatDate(fechaI,'dd-MM-yyyy','en-US')
    return da
  }

  verPerfilAutor(name:string){
    console.log("mandare la info del autor "+name)
    this.ObtenerInfoUserService.createUser(new UserComplete(String(name),'  ',' ',' ',' ',this.photo,UserType.AUTOR))
    .subscribe((usuario:UserComplete)=>{
      this.autor= usuario; 
      console.log(this.autor)
      this.mostrarAutor=1;
      this.comentFinal=0;
      this.coment=0;
      this.mostrarComents=0;
      this.previsualizacion=""
    })

  }
}

