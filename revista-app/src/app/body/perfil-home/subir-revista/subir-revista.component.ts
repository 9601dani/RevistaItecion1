import { ServiceHomeService } from 'service/service-home.service';
import { Etiqueta } from 'src/objects/Etiqueta';
import { Estado_Rev } from './../../../../objects/ENUMS/Estado_Rev';
import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ObtenerInfoUserService } from './../../../../../service/obtener-info-user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/objects/Categoria';
import { Revista } from 'src/objects/Revista';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Rev } from 'src/objects/Rev';
import { User } from 'src/objects/User';
import { MenuUserService } from 'service/menu-user.service';

@Component({
  selector: 'app-subir-revista',
  templateUrl: './subir-revista.component.html',
  styleUrls: ['./subir-revista.component.css'],
})
export class SubirRevistaComponent implements OnInit {
formRevista!:FormGroup;
categorias!:Array<Categoria>;
cat!:Categoria;
 previsualizacion!: string;
public pre!:string;
public archivos:any=[]
arch!:string;
fileUploaded: boolean = false;
messageUpload: String = '';
user!:User;

  constructor(private FormBuilder:FormBuilder,private ObtenerInfoUserService: ObtenerInfoUserService,
    private sanitizer: DomSanitizer, private MenuAutorService:MenuAutorService, private service: MenuUserService,
    private ServiceHomeService:ServiceHomeService) { 
   
  }

  ngOnInit(): void {
    this.ServiceHomeService.span=0;
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
      alert("NO HAY CATEGORIAS");
    });
  }
  saveRevista() {
    console.log(this.arch)
    if (this.arch != null) {
      this.user =JSON.parse(<string>localStorage.getItem('userS'));  
      localStorage.setItem("nRev",JSON.stringify(new Revista(0,this.formRevista.value.nomRevista,this.previsualizacion,this.formRevista.value.fecha_publicacion,this.formRevista.value.descripcion,
        this.formRevista.value.fecha_publicacion,Estado_Rev.EN_ESPERA,0,this.formRevista.value.fecha_publicacion,this.formRevista.value.costoSuscripcion,this.formRevista.value.like,this.formRevista.value.Dcomentario,this.formRevista.value.Dsuscripcion,this.formRevista.value.Dcategoria,
        this.user.nombre_usuario)));
      this.MenuAutorService.fileUpload(this.arch, this.previsualizacion).subscribe((created:Etiqueta)=>{
        console.log(created);
        if(created!=null){
          localStorage.removeItem("nRev")
          alert("Se guardo correctamente");
          this.service.Op='perfil';
        }else{
          alert("NO SE GUARDO");
          
        }
      },(error:any)=>{
        alert("ERROR AL GUARDAR "+error);
      });
    }
  }


  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.arch=archivoCapturado;
      this.previsualizacion = imagen.base;
      this.ObtenerInfoUserService.changePrevisualizacion(this.previsualizacion);
      console.log(this.arch);
    })
    //this.archivos.push(archivoCapturado)
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
