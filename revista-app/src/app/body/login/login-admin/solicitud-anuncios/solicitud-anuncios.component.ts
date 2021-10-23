import { FileImg } from '../../../../../objects/FileImg';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuAdminService } from './../../../../../../service/menu-admin.service';
import { Respuesta } from './../../../../../objects/Respuesta';
import { Estado_Anun } from './../../../../../objects/ENUMS/Estado_Anun';
import { AnuncioService } from './../../../../../../service/anuncio.service';
import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/objects/Anuncio';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-anuncios',
  templateUrl: './solicitud-anuncios.component.html',
  styleUrls: ['./solicitud-anuncios.component.css']
})
export class SolicitudAnunciosComponent implements OnInit {
  anuncios!: Array<Anuncio>
  anuncio!: Anuncio
  //CAMPOS DE ANUNCIO
  id_anuncio!: number;
  des_anuncio!: string;
  texto!: string;
  contenido!: string;
  apariciones!: number;
  total_pago!: number;
  estado_anuncio!: Estado_Anun;
  url!: string;
  fecha_inicio!: string;
  fecha_final!: string;
  nombre_usuario!: string;
  nombre_tipo!: string;
  //acciones a realizar
  accion!: string;
  previsualizacion!: string
  //formularios
  formUpdate!: FormGroup
  formUpdateImg!: FormGroup
  formUpdateVideo!: FormGroup
  formForRenovar!:FormGroup
  //renovacion
  time!:number
total:number=0
pagar!: number
fecha_in!: string;
tipoFinal!:string

  constructor(private AnuncioService: AnuncioService, private route: Router,
    private MenuAdminService: MenuAdminService, private FormBuilder: FormBuilder,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAnuncios()
    this.formUpdate = this.FormBuilder.group({
      des_anuncio: [null, Validators.required],
      texto: [null, Validators.required],
      url: [null, Validators.required],
    })
    this.formUpdateVideo = this.FormBuilder.group({
      link: [null, Validators.required]
    })
    this.formForRenovar = this.FormBuilder.group({
      fechaI: [null, Validators.required],
      tiempo: [null, Validators.required]
    })
  }

  getAnuncios() {
    this.AnuncioService.getAllAnuncio().subscribe((created: Anuncio[]) => {
      console.log(created);
      if (created != null) {
        this.anuncios = created;
      } else {
        alert("NO HAY ANUNCIOS POR EL MOMENTO")
      }
    }, (error: any) => {
      alert("NO HAY ANUNCIOS POR EL MOMENTO")
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
  updateAnuncio(id_anuncio: number, des_anuncio: string, texto: string, url: string) {
    this.id_anuncio = id_anuncio
    this.des_anuncio = des_anuncio
    this.texto = texto
    this.url = url
    this.accion = 'update'
  }
  updateFinal() {
    this.AnuncioService.updateAnuncio(this.id_anuncio, this.formUpdate.value.des_anuncio, this.formUpdate.value.texto, this.formUpdate.value.url).subscribe((created: Respuesta) => {
      console.log(created);
      if (created != null) {
        alert("SE ACTUALIZO EL ANUNCIO")
        this.MenuAdminService.Opcion = '';
      } else {
        alert(" NO SE PUDO ACTUALIZO EL ANUNCIO")
      }
    }, (error: any) => {
      alert(" NO SE PUDO ACTUALIZO EL ANUNCIO" + error)
    })


  }

  updateContenido(id_anuncio: number, contenidoActual: string) {
    this.id_anuncio = id_anuncio
    this.accion = 'updateIMG'
  }
  updateImgFinal() {
    this.AnuncioService.updateImg(new FileImg(this.previsualizacion), this.id_anuncio).subscribe((created: Respuesta) => {
      console.log(created);
      if (created != null) {
        if (created.respuesta == "yes") {
          alert("SE GUARDO LA IMAGEN")
          this.MenuAdminService.Opcion = '';
        } else {
          alert("NO SE GUARDO LA IMAGEN")
        }

      } else {
        alert("NO SE GUARDO LA IMAGEN")
      }
    }, (error: any) => {
      alert("NO SE GUARDO LA IMAGEN")
    })
  }
  updateVideo(id_anunci: number, contenidoActual: string) {
    this.id_anuncio = id_anunci
    this.accion = 'updateVideo'
  }

  updateVideoFinal() {
    this.AnuncioService.updateVideo(this.id_anuncio, this.formUpdateVideo.value.link).subscribe((created: Respuesta) => {
      console.log(created);
      if (created != null) {
        if (created.respuesta == "yes") {
          alert("SE CAMBIO EL LINK DE VIDEO")
          this.MenuAdminService.Opcion = '';
        } else {
          alert("SE CAMBIO EL LINK DE VIDEO")
        }

      } else {
        alert("SE CAMBIO EL LINK DE VIDEO")
      }
    }, (error: any) => {
      alert("SE CAMBIO EL LINK DE VIDEO")
    })
  }

  activarAnuncio(id_anunci: number) {
    this.AnuncioService.activarAnuncio(id_anunci).subscribe((created: Respuesta) => {
      console.log(created);
      if (created != null) {
        if (created.respuesta == "yes") {
          alert("SE ACTIVO EL ANUNCIO")
          this.MenuAdminService.Opcion = '';
        } else {
          alert(" NO SE PUDO ACTIVAR EL ANUNCIO")
        }

      } else {
        alert(" NO SE PUDO ACTIVAR EL ANUNCIO")
      }
    }, (error: any) => {
      alert(" NO SE PUDO ACTIVAR EL ANUNCIO")
    })
  }
  desactivarAnuncio(id_anunci: number) {
    this.AnuncioService.desactivarAnuncio(id_anunci).subscribe((created: Respuesta) => {
      console.log(created);
      if (created != null) {
        if (created.respuesta == "yes") {
          alert("SE DESACTIVO EL ANUNCIO")
          this.MenuAdminService.Opcion = '';
        } else {
          alert(" NO SE PUDO DESACTIVAR EL ANUNCIO")
        }

      } else {
        alert(" NO SE PUDO DESACTIVAR EL ANUNCIO")
      }
    }, (error: any) => {
      alert(" NO SE PUDO DESACTIVAR EL ANUNCIO")
    })

  }
  renovar(id_anunci: number, fecha_final:string, tipo:string, fecha_inicio:string) {
    this.id_anuncio=id_anunci;
    this.tipoFinal= tipo
    this.accion = 'renovar'

  }
  renovarSus(){
    this.AnuncioService.renovarAnuncio(this.id_anuncio,this.devFechaFinal(this.formForRenovar.value.fechaI),this.tipoFinal,this.formForRenovar.value.tiempo)
    .subscribe((created:Respuesta)=>{
      console.log(created);
      if (created != null) {
          alert("SE RENOVO EL ANUNCIO COSTO TOTAL Q."+created.respuesta)
          this.MenuAdminService.Opcion = '';

      } else {
        alert(" NO SE PUDO RENOVAR EL ANUNCIO")
      }
    }, (error: any) => {
      alert(" NO SE PUDO RENOVAR EL ANUNCIO")

    })

  }
  getEstado(estado: Estado_Anun): string {
    if (estado == Estado_Anun.ACEPTADO) {
      return "ACEPTADO"
    } else if (estado == Estado_Anun.EN_ESPERA) {
      return "EN_ESPERA"
    } else if (estado == Estado_Anun.MOROSO) {
      return "MOROSO"
    }
    return "CADUCADO"
  }
  getAccionn(): string {
    return this.accion
  }

  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(this.previsualizacion);
    })
    //  this.archivos.push(archivoCapturado)
    // 
    // console.log(event.target.files);

  }
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);

      reader.onload = () => {
        resolve({
          base: reader.result

        });
      };
      reader.onerror = _error => {
        resolve({
          base: null
        });
      };
      return
    } catch (e) {
      return null;
    }
  });

  devFechaFinal(fechainicial:string):string{
    let da=  new Date(formatDate(fechainicial,'yyyy-MM-dd','en-US'))
    let fi= new Date(da.getUTCFullYear(),(da.getUTCMonth()),da.getUTCDate()+this.formForRenovar.value.tiempo)
    console.log("--------> "+formatDate(fi,'yyyy-MM-dd','en-US'))
      return formatDate(fi,'yyyy-MM-dd','en-US')
    }

    getPagar(): number {

      return this.pagar;
    }
}
