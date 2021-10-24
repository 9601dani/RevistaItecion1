import { Estado_Sus } from 'src/objects/ENUMS/Estado_Sus';
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
import { Anuncio } from 'src/objects/Anuncio';
import { Porcentaje } from 'src/objects/Porcentaje';
import { Recaudacion } from 'src/objects/Recaudacion';


@Component({
  selector: 'app-mis-suscripciones',
  templateUrl: './mis-suscripciones.component.html',
  styleUrls: ['./mis-suscripciones.component.css']
})
export class MisSuscripcionesComponent implements OnInit {
  objPorcentaje!: Porcentaje[];
  porcentaje!: number;

  constructor(private MenuUserService: MenuUserService, private FormBuilder: FormBuilder,
    private ObtenerInfoUserService: ObtenerInfoUserService, private ServiceHomeService: ServiceHomeService) { }
  revista!: Array<RevistaForAdmin>;
  rev1!: RevistaForAdmin;
  respuesta!: Respuesta
  //infor usuario
  userName: User = JSON.parse(<string>localStorage.getItem("userS"));
  //ver archivo
  previsualizacion!: string
  opcio!: number;
  //aceptar o no me gusta
  aceptar_me_gusta: number = 0;
  coment: number = 0;
  comentFinal: number = 0;
  ya_dio_like!: number;
  id_rev!: number
  id_sus!: number
  //infoSuscripcion of user
  suscripcion!: Suscripcion
  //saveComentario
  formComentario!: FormGroup;
  //comentarios que se veran
  mostrarComents: number = 0;
  comentariosRev!: Array<ComentarioMostrar>
  comentariosRev2!: ComentarioMostrar
  fechaComentario!: string;
  autor!: UserComplete
  photo!: string;
  mostrarAutor: number = 0;
  estado: Estado_Sus = Estado_Sus.DESACTIVA
  //formulario
  myFormSus!: FormGroup;
  //renovar suscripcion
  sus!: number;
  time!: number
  total: number = 0
  pagar!: number
  fecha_final!: Date;
  fecha_in!: string;
  dat!: Date
  nom_revista!: string
  nom_autor!: string
  id_revista!: number
  valor_sus!: number
  ngOnInit(): void {
    this.ServiceHomeService.span = 1;
    this.getRevistas();
    this.getPorcentaje();
    this.formComentario = this.FormBuilder.group({
      comentario: [null, Validators.required],
      fecha_comentario: [null, Validators.required],
    })
    this.myFormSus = this.FormBuilder.group({
      fechaI: [null, Validators.required],
      tiempo: [null, Validators.required],
      total: [null, Validators.required]
    })
  }

  getRevistas() {
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
  getMg(): number {
    return this.aceptar_me_gusta;
  }
  getLike(): number {
    return this.ya_dio_like;
  }
  getComen(): number {
    return this.coment;
  }
  getComentFinal(): number {
    return this.comentFinal
  }
  getMostrarComents(): number {
    return this.mostrarComents;
  }
  getMostrarAutor(): number {
    return this.mostrarAutor;
  }
  getPagar(): number {

    return this.pagar;
  }
  getCostoTotal() {
    console.log(this.total)
    console.log(this.valor_sus)
    console.log(this.myFormSus.value.tiempo)
    this.total = this.valor_sus * this.myFormSus.value.tiempo
    console.log(this.total + "sto pagata")
    this.pagar = 1;
  }

  verPdf(archivo: string, me_gusta: Me_Gusta_E, id_revista: number, come: Comentario_E, costoS: number, non_rev: string, nom_autor: string) {
    console.log(archivo);
    this.id_rev = id_revista
    this.previsualizacion = archivo;
    this.valor_sus = costoS
    this.nom_revista = non_rev
    this.nom_autor = nom_autor
    if (me_gusta == Me_Gusta_E.ACEPTA_LIKE) {
      this.aceptar_me_gusta = 0;
    } else {
      this.aceptar_me_gusta = 1;
    }
    if (come == Comentario_E.ACEPTA_COMENTARIO) {
      this.coment = 0;
    } else {
      this.coment = 1;
    }
    this.MenuUserService.infoSus(this.userName.nombre_usuario, id_revista).subscribe((created: Suscripcion) => {
      console.log(created);
      if (created != null) {
        this.suscripcion = created;
        console.log(this.suscripcion.id_suscripcion)
        this.id_sus = this.suscripcion.id_suscripcion

        if (this.suscripcion.me_gusta == Me_Gusta_Suscripcion.DIO_LIKE) {
          this.ya_dio_like = 1
        } else {
          this.ya_dio_like = 0;
        }
        this.mostrarAutor = 0;

      } else {
        //this.previsualizacion=""
        // this.mostrarComents=0;
        // alert("TU SUSCRIPCION YA VENCIO ");
        
        
      }

    }, (error: any) => {
      alert("NO ESTAS SUSCRITO A NINGUNA REVISTA");
    })
    this.mostrarComents = 0;
    this.opcio=1;
    
  }


  darMeGusta() {
    console.log("dare like")
    this.MenuUserService.darLike(this.id_rev, this.userName.nombre_usuario).subscribe((created: Respuesta) => {
      console.log(created);
      if (created != null) {
        this.respuesta = created;
        if (this.respuesta.respuesta == "yes") {
          alert("SE DIO LIKE")
          this.MenuUserService.Op = 'perfil'
        } else {
          alert("NO SE PUDO DAR LIKE")
        }

      } else {
        alert("NO SE PUDO DAR LIKE")
      }

    }, (error: any) => {
      alert("NO SE PUDO DAR LIKE :(")
    })
  }

  quitarMeGusta() {
    console.log("quitare mi like")
    this.MenuUserService.quitarLike(this.id_rev, this.userName.nombre_usuario).subscribe((created: Respuesta) => {
      console.log(created);
      if (created != null) {
        this.respuesta = created;
        if (this.respuesta.respuesta == "yes") {
          alert("SE QUITO EL LIKE")
          this.MenuUserService.Op = 'perfil'
        } else {
          alert("NO SE PUDO DAR LIKE")
        }

      } else {
        alert("NO SE PUDO DAR LIKE")
      }

    }, (error: any) => {
      alert("NO SE PUDO DAR LIKE :(")
    })
  }

  comentar() {
    this.comentFinal = 1;
  }
  saveComentario() {
    console.log("mandare ese id_sus" + this.id_sus)
    this.MenuUserService.saveComentario(new Comentario(0, this.formComentario.value.comentario, this.formComentario.value.fecha_comentario, this.id_rev, this.id_sus)).subscribe((created: Respuesta) => {
      console.log(created);
      if (created != null) {
        this.respuesta = created;
        if (this.respuesta.respuesta == "yes") {
          alert("SE AGREGO EL COMENTARIO")
          this.MenuUserService.Op = 'perfil'
        } else {
          alert("NO SE PUDO AGREGAR EL COMENTARIO")
        }

      } else {
        alert("NO SE PUDO AGREGAR EL COMENTARIO")
      }

    }, (error: any) => {
      alert("NO SE PUDO AGREGAR EL COMENTARIO")
    })

  }

  verComentarios(id_revista: number, nom_revista:string) {
    this.mostrarAutor=0;
    this.opcio=2;
    console.log("voy a mostrar los comentarios de " + id_revista)
    this.MenuUserService.getComentarios(id_revista).subscribe((created: ComentarioMostrar[]) => {
      console.log(created);
      if (created != null) {
        this.comentariosRev = created;
        this.mostrarComents = 1;
        this.nom_revista=nom_revista

      } else {
        alert("NO HAY COMENTARIOS PARA ESTA REVISTA")
        this.mostrarComents = 0;
      }

    }, (error: any) => {
      alert("NO HAY COMENTARIOS PARA ESTA REVISTA")
      this.mostrarComents = 0;
    })


  }

  public formarearFecha(fecha: string): string {
    let da = formatDate(fecha, 'dd-MM-yyyy', 'en-US')
    return da
  }
  public formatearFecha(fecha: Date): string {
    let fechaI = fecha.toString()
    let da = formatDate(fechaI, 'dd-MM-yyyy', 'en-US')
    return da
  }

  verPerfilAutor(name: string) {
    console.log("mandare la info del autor " + name)
    this.ObtenerInfoUserService.createUser(new UserComplete(String(name), '  ', ' ', ' ', ' ', this.photo, UserType.AUTOR))
      .subscribe((usuario: UserComplete) => {
        this.autor = usuario;
        console.log(this.autor)
        this.opcio=3
        this.mostrarAutor = 1;
        this.comentFinal = 0;
        this.coment = 0;
        this.mostrarComents = 0;
        this.previsualizacion = ""
      })

  }

  renovarSus() {
    this.fecha_in = this.myFormSus.value.fechaI
    this.fecha_final = this.devFechaFinal(this.fecha_in)

    console.log("fecha inicial " + this.fecha_in)
    console.log("fecha final " + formatDate(this.fecha_final, 'yyyy-MM-dd', 'en-US'))
    //datos varios
    console.log("me voy a pagar a finalmente" + this.id_revista)
    console.log("con un costo de " + this.total)
    console.log("yo " + this.userName.nombre_usuario)
    this.MenuUserService.updateSuscripcion(new Suscripcion(this.id_sus, this.total, this.fecha_in, formatDate(this.fecha_final, 'yyyy-MM-dd', 'en-US'), Me_Gusta_Suscripcion.NO_DIO_LIKE, Estado_Sus.ACTIVA, this.userName.nombre_usuario, this.id_rev)).subscribe((created: Respuesta) => {
      console.log(created);
      if (created != null) {
        this.respuesta = created
        if (this.respuesta.respuesta == "yes") {
          this.MenuUserService.saveRecaudacion(new Recaudacion(this.nom_revista, this.total - (this.total * (this.porcentaje / 100)), (this.total * (this.porcentaje / 100)), this.fecha_in, this.userName.nombre_usuario, this.nom_autor)).subscribe((created: Respuesta) => {
            console.log(created);
            this.respuesta = created
            if (this.respuesta.respuesta == "se_guardo") {
              alert("SE ACTUALIZO CORRECTAMENTE");
              this.MenuUserService.Op = 'perfil'
            } else if (this.respuesta.respuesta == "no_se_guardo") {
              alert("NO SE PUDO ACTUALIZAR INTENTA DE NUEVO");
              this.MenuUserService.Op = 'perfil'
            }
          })

          this.MenuUserService.Op = 'perfil'
        } else if (this.respuesta.respuesta == "no_se_guardo_ya") {
          alert("PARECE QUE YA ESTAS SUSCRITO");
          this.MenuUserService.Op = 'perfil'
        } else {
          alert("NO SE PUDO GUARDAR INTENTALO DE NUEVO");
          this.MenuUserService.Op = 'perfil'
        }
      } else {
        alert("NO SE PUDO GUARDAR INTENTALO DE NUEVO");
        this.MenuUserService.Op = 'perfil'
      }

    }, (error: any) => {
      alert("ERROR AL GUARDAR" + error);
    });;


  }
  getEsadoSus(estado: Estado_Sus): string {
    if (estado == Estado_Sus.ACTIVA) {
      return "ACTIVA"
    } else if (estado == Estado_Sus.SUSPENDIDA) {
      return "SUSPENDIDA"
    }
    return "DESACTIVA"
  }
  devFechaFinal(fechainicial: string): Date {
    let da = new Date(formatDate(fechainicial, 'yyyy-MM-dd', 'en-US'))
    let fi = new Date(da.getUTCFullYear(), (da.getUTCMonth()) + this.myFormSus.value.tiempo, da.getUTCDate())
    return fi
  }
  getPorcentaje() {
    this.ObtenerInfoUserService.getPorcentaje().subscribe((created: Porcentaje[]) => {
      console.log(created);
      if (created != null) {
        this.objPorcentaje = created;
        this.porcentaje = this.objPorcentaje[0].porcentaje;
      } else {
        alert("actualmente no se ah asignado ningun porcentaje");
      }

    }, (error: any) => {
      alert("ERROR AL GUARDAR" + error);
    });

  }

  getOpcion():number{
    return this.opcio
  }

}