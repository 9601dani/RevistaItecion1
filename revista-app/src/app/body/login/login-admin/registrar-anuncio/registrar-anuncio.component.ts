import { Respuesta } from 'src/objects/Respuesta';
import { Admin } from './../../../../../objects/Admin';
import { Estado_Anun } from './../../../../../objects/ENUMS/Estado_Anun';
import { MenuAdminService } from 'service/menu-admin.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/objects/Anuncio';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-registrar-anuncio',
  templateUrl: './registrar-anuncio.component.html',
  styleUrls: ['./registrar-anuncio.component.css']
})
export class RegistrarAnuncioComponent implements OnInit {
anuncioType!:string;
change_anuncio:number=0;
previsualizacion!: string;
urlPrueba!:string;
videoPrueba!:string
//FORMULARIOS
formOptions!:FormGroup;
formForText!:FormGroup
formForTextAndImg!:FormGroup
formForTextAndVideo!:FormGroup

admin:Admin=JSON.parse(<string>localStorage.getItem("Admin"))
  constructor(private FormBuilder:FormBuilder, private sanitizer:DomSanitizer,
    private MenuAdminService:MenuAdminService) { }

  ngOnInit(): void {

    this.formOptions=this.FormBuilder.group({
      anuncioType:[null,Validators.required],
    })
    this.formForText=this.FormBuilder.group({
      des_anuncio:[null,Validators.required],
      contenido:[null,Validators.required],
      url:[null,Validators.required],
      fecha_inicio:[null,Validators.required],
      dias:[null,Validators.required]
    })
    this.formForTextAndImg=this.FormBuilder.group({
      des_anuncio:[null,Validators.required],
      contenido:[null,Validators.required],
      url:[null,Validators.required],
      fecha_inicio:[null,Validators.required],
      imagen:[null,Validators.required],
      dias:[null,Validators.required]
    })
    this.formForTextAndVideo=this.FormBuilder.group({
      des_anuncio:[null,Validators.required],
      contenido:[null,Validators.required],
      url:[null,Validators.required],
      fecha_inicio:[null,Validators.required],
      video:[null,Validators.required],
      dias:[null,Validators.required]
    })
  }

  llenarAnuncio(){
    if(this.formOptions.value.anuncioType=="TEXTO"){
      console.log("es solo de texto")
      this.change_anuncio=1

    } else if(this.formOptions.value.anuncioType=="TEXTO_Y_IMAGEN"){
      console.log("texto y imagen")
      this.change_anuncio=2
    }else if(this.formOptions.value.anuncioType=="TEXTO_Y_VIDEO"){
      console.log("video y texto")
      this.change_anuncio=3
    }else{
      console.log("no hay opcion")
    }
  }
  getType():number{
    return this.change_anuncio;
  }

  saveAnuncioWithImg(){
    console.log(this.formForTextAndImg.value.url)
    this.urlPrueba=this.formForTextAndImg.value.url

    this.MenuAdminService.saveAnuncioText(new Anuncio(0,this.formForTextAndImg.value.des_anuncio,this.formForTextAndImg.value.contenido,this.formForTextAndImg.value.imagen,
      0,3,Estado_Anun.EN_ESPERA,this.formForTextAndImg.value.url,this.formForTextAndImg.value.fecha_inicio,this.devFechaFinal(this.formForTextAndImg.value.fecha_inicio),this.admin.nombre_usuario,this.formOptions.value.anuncioType),this.formForTextAndImg.value.dias).subscribe((created:Respuesta)=>{
        console.log(created);
        if(created!=null){
          alert("SE GUARDO EL ANUNCIO DE TIPO TEXTO CON IMAGEN TU TOTAL FUE "+created.respuesta);
          this.MenuAdminService.Opcion='';
        }else{
          alert("NO SE PUDO GUARDAR EL ANUNCIO :(");
          
        }
      },(error:any)=>{
        alert("NO SE PUDO GUARDAR EL ANUNCIO");
      })


  }
  saveAnuncioWithText(){
   // des_anuncio,contenido, url, fecha_inicio
    this.MenuAdminService.saveAnuncioText(new Anuncio(0,this.formForText.value.des_anuncio,this.formForText.value.contenido," ",
      0,3,Estado_Anun.EN_ESPERA,this.formForText.value.url,this.formForText.value.fecha_inicio,this.devFechaFinal(this.formForText.value.fecha_inicio),this.admin.nombre_usuario,this.formOptions.value.anuncioType),this.formForText.value.dias).subscribe((created:Respuesta)=>{
        console.log(created);
        if(created!=null){
          alert("SE GUARDO EL ANUNCIO DE TIPO TEXTO TU TOTAL FUE "+created.respuesta);
          this.MenuAdminService.Opcion='';
        }else{
          alert("NO SE PUDO GUARDAR EL ANUNCIO :(");
          
        }
      },(error:any)=>{
        alert("NO SE PUDO GUARDAR EL ANUNCIO");
      })

  }
  saveAnuncioWithVideo(){        
   this.videoPrueba=this.formForTextAndVideo.value.video;
   this.MenuAdminService.saveAnuncioText(new Anuncio(0,this.formForTextAndVideo.value.des_anuncio,this.formForTextAndVideo.value.contenido,this.formForTextAndVideo.value.video,
    0,3,Estado_Anun.EN_ESPERA,this.formForTextAndVideo.value.url,this.formForTextAndVideo.value.fecha_inicio,this.devFechaFinal(this.formForTextAndVideo.value.fecha_inicio),this.admin.nombre_usuario,this.formOptions.value.anuncioType),this.formForTextAndVideo.value.dias).subscribe((created:Respuesta)=>{
      console.log(created);
      if(created!=null){
        alert("SE GUARDO EL ANUNCIO DE TIPO TEXTO CON VIDEO TU TOTAL FUE "+created.respuesta);
        this.MenuAdminService.Opcion='';
      }else{
        alert("NO SE PUDO GUARDAR EL ANUNCIO :(");
        
      }
    },(error:any)=>{
      alert("NO SE PUDO GUARDAR EL ANUNCIO");
    })




  }
  
  getLink():SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl( this.videoPrueba)
  }

  devFechaFinal(fechainicial:string):string{
    let da=  new Date(formatDate(fechainicial,'yyyy-MM-dd','en-US'))
    let fi= new Date(da.getUTCFullYear(),(da.getUTCMonth()),da.getUTCDate()+this.formForText.value.dias)
    console.log("--------> "+formatDate(fi,'yyyy-MM-dd','en-US'))
      return formatDate(fi,'yyyy-MM-dd','en-US')
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

  extraerBase64 = async ($event: any) => new Promise((resolve,reject) =>{
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

  
  

}
