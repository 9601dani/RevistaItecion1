import { Estado_Rev } from './../../../../objects/ENUMS/Estado_Rev';
import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ObtenerInfoUserService } from './../../../../../service/obtener-info-user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/objects/Categoria';
import { Revista } from 'src/objects/Revista';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-subir-revista',
  templateUrl: './subir-revista.component.html',
  styleUrls: ['./subir-revista.component.css'],
})
export class SubirRevistaComponent implements OnInit {
formRevista!:FormGroup;
categorias!:Array<Categoria>;
cat!:Categoria;
public previsualizacion!: String;
public pre!:string;
public archivos:any=[]
arch!:Blob;
  constructor(private FormBuilder:FormBuilder,private ObtenerInfoUserService: ObtenerInfoUserService,
    private sanitizer: DomSanitizer, private MenuAutorService:MenuAutorService) { 
   
  }

  ngOnInit(): void {
    this.getCategoria();
    this.formRevista=this.FormBuilder.group({
      nomRevista:[null,Validators.required],
      fecha_publicacion:[null,Validators.required],
      descripcion:[null,Validators.required],
      costoSuscripcion:[null,Validators.required],
      like:[null,Validators.required],
      Dcomentario:[null,Validators.required],
      Dsuscripcion:[null,Validators.required],
      Dcategoria:[null,Validators.required],
      fileRevista:[null,Validators.required]
    })
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

  saveRevista(){
    this.MenuAutorService.saveRevista(new Revista(0,this.formRevista.value.nomRevista,new Blob(),this.formRevista.value.fecha_publicacion,this.formRevista.value.descripcion,
      this.formRevista.value.fecha_publicacion,Estado_Rev.EN_ESPERA,0,this.formRevista.value.fecha_publicacion,this.formRevista.value.costoSuscripcion,this.formRevista.value.like,this.formRevista.value.Dcomentario,this.formRevista.value.Dsuscripcion,this.formRevista.value.Dcategoria,
      " ")).subscribe((created:Revista)=>{
        console.log(created);
        if(created!=null){
          alert("SE GUARDO LA REVISTA CORRECTAMENTE ");
        }else{
          alert("NO SE GUARDO LA REVISTA");
        }
  
      },(error:any)=>{
        alert("ERROR AL GUARDAR"+error);
      });
  }

  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.arch=archivoCapturado;
      this.previsualizacion = imagen.base;
      this.ObtenerInfoUserService.changePrevisualizacion(this.previsualizacion);
      console.log(imagen);
    })
    this.archivos.push(archivoCapturado)
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
