import { Respuesta } from './../../../../objects/Respuesta';
import { Me_Gusta_Suscripcion } from './../../../../objects/ENUMS/Me_Gusta_Suscripcion';
import { ObtenerInfoUserService } from './../../../../../service/obtener-info-user.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Suscrip_E } from './../../../../objects/ENUMS/Suscrip_E';
import { User } from './../../../../objects/User';
import { MenuUserService } from 'service/menu-user.service';
import { RevUser } from './../../../../objects/RevUser';
import { Component, OnInit } from '@angular/core';
import { RevAutor } from 'src/objects/RevAutor';
import { RevistaForAdmin } from 'src/objects/RevistaForAdmin';
import { Etiqueta } from 'src/objects/Etiqueta';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Rev } from 'src/objects/Rev';
import { Rev2 } from 'src/objects/Rev2';
import { formatDate } from '@angular/common';
import { Suscripcion } from 'src/objects/Suscripcion';
import { Estado_Sus } from 'src/objects/ENUMS/Estado_Sus';
import { Recaudacion } from 'src/objects/Recaudacion';
import { Porcentaje } from 'src/objects/Porcentaje';

@Component({
  selector: 'app-ver-revista',
  templateUrl: './ver-revista.component.html',
  styleUrls: ['./ver-revista.component.css']
})
export class VerRevistaComponent implements OnInit {
  dangerousVideoUrl!: string;
  videoUrl: any;

  constructor(private MenuUserService:MenuUserService, private FormBuilder:FormBuilder,
    private sanitizer:DomSanitizer, private obtener:ObtenerInfoUserService,
    private ObtenerInfoUserService:ObtenerInfoUserService) { }
//Revistas para usuario
revis!: Array<RevUser>;
revi!: RevUser;
//Revistas completas
revista!: Array<RevistaForAdmin>;
rev1!: RevistaForAdmin;
//opciones para ver o no ver
opcio!: number;
//etiquetas
etiquetas!:Array<Etiqueta>
et!:Etiqueta;
//datos necesarios para mostrar
nameRev!:string;
//datos para suscribirse
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
nom_revista!:string
nom_autor!:string
//formulario
myFormSus!:FormGroup;
//revista
libroRecivido!:RevistaForAdmin[];
obRev!:Rev
obRev2!:Rev2
bytes!: SafeUrl
//respuesta 
respuesta!:Respuesta
//Porcentaje
objPorcentaje!:Porcentaje[]
porcentaje!:number
  ngOnInit(): void {
    this.getRevistas();
    this.getPorcentaje();
    this.myFormSus=this.FormBuilder.group({
      fechaI:[null,Validators.required],
      tiempo:[null,Validators.required],
      total:[null,Validators.required]
    })
  }

  getRevistas(){
    this.MenuUserService.getRevistasUser().subscribe((created: RevistaForAdmin[]) => {
      console.log(created);
      if (created != null) {
        this.revista = created;
        this.libroRecivido=created;
        //this.bytes = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + this.libroRecivido[0].archivo) ;
        //this.updateVideoUrl(this.libroRecivido[1].archivo)

       /*this.obtener.getBytesFIle(new Rev(this.libroRecivido[1].archivo)).subscribe((created: Rev2) => {
          console.log(created);
          if (created != null) {
            this.obRev2 = created;
            this.videoUrl=this.obRev2.archivo
            //this.bytes = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + this.libroRecivido[0].archivo) ;
           // this.updateVideoUrl(this.obRev2.archivo)
          } else {
            alert("ERROR AQUI");
          }
    
        }, (error: any) => {
          alert("ERROR AL GUARDAR" + error);
        });;*/

      } else {
        alert("ERROR AQUI");
      }

    }, (error: any) => {
      alert("ERROR AL GUARDAR" + error);
    });;

  }
  setMod(op: number) {
    this.opcio = op;
  }
  getMod(): number {
    return this.opcio;
  }
  verPre(id_revista: number,nombre:string,costo:number, sus:Suscrip_E) {
    this.valor_sus=costo
    this.id_revista=id_revista;
    this.aceptarSus=sus;
    this.nom_revista=nombre
    this.MenuUserService.getInfoRevUser(id_revista).subscribe((created: RevUser) => {
      
      console.log(created);
      if (created != null) {
        this.revi = created;
        this.nom_autor=this.revi.nombre_usuario
        this.etiquetas=this.revi.etiquetas;
        this.nameRev=nombre;
      } else {
        alert("NO SE PUEDE VER LA PRE VISUALIZACION");
      }

    }, (error: any) => {
      alert("ERROR AL GUARDAR" + error);
    });;
    this.opcio = 1;
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
          this.MenuUserService.saveRecaudacion(new Recaudacion(this.nameRev,this.total-(this.total*(this.porcentaje/100)),(this.total*(this.porcentaje/100)),this.fecha_in,this.userName.nombre_usuario, this.nom_autor)).subscribe((created:Respuesta)=>{
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

