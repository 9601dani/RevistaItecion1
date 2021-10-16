import { EtiquetaRev } from './../../../../objects/EtiquetaRev';
import { MenuUserService } from 'service/menu-user.service';
import { MenuUserComponent } from 'src/app/menu/menu-user/menu-user.component';
import { Suscrip_E } from './../../../../objects/ENUMS/Suscrip_E';
import { Comentario_E } from './../../../../objects/ENUMS/Comentario_E';
import { Me_Gusta_E } from './../../../../objects/ENUMS/Me_Gusta_E';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { DomSanitizer } from '@angular/platform-browser';
import { ObtenerInfoUserService } from './../../../../../service/obtener-info-user.service';
import { RevAutor } from './../../../../objects/RevAutor';
import { Rev } from './../../../../objects/Rev';
import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceHomeService } from 'service/service-home.service';
import { Byte } from '@angular/compiler/src/util';
import { CRUDRev } from 'src/objects/CRUDRev';
import { Etiqueta } from 'src/objects/Etiqueta';

@Component({
  selector: 'app-ver-mis-revistas',
  templateUrl: './ver-mis-revistas.component.html',
  styleUrls: ['./ver-mis-revistas.component.css']
})
export class VerMisRevistasComponent implements OnInit {

  constructor(private MenuAutorService: MenuAutorService, private ObtenerInfoUserService: ObtenerInfoUserService,
    private sanitizer: DomSanitizer, private FormBuilder: FormBuilder, private MenuUserService: MenuUserService) { }
  //FORMULARIO
  opcio!: number;
  myForm!: FormGroup;
  myForm2!: FormGroup;
  id!: number;
  nombre!: string;
  descripcion!: string;
  costoSuscripcion!: number;
  like!: Me_Gusta_E;
  Dcomentario!: Comentario_E;
  Dsuscripcion!: Suscrip_E;
  prueba!: string;
  private selectedFile!: string;
  imgURL: any;
  //OTRAS VARIABLES
  revistas!: Array<RevAutor>;
  rev!: RevAutor;
  public previsualizacion!: string;
  public pre!: String;
  public archivos: any = []
  arch!: File;
  linea!: Byte[];

  //variables extra
  etiquetas!:Array<Etiqueta>;
  ngOnInit(): void {
    this.getRevistas();
  
    this.myForm = this.FormBuilder.group({
      id: [null, Validators.required],
      nombre: [null, Validators.required],
      des: [null, Validators.required],
      costo_sus: [null, Validators.required],
      like: [null, Validators.required],
      Dcomentario: [null, Validators.required],
      Dsuscripcion: [null, Validators.required],
    })
    this.myForm2 = this.FormBuilder.group({
      id: [null, Validators.required],
      nombre:[null, Validators.required],
     etiquetaN:[null, Validators.required]
    })

  }

  getRevistas() {
    this.MenuAutorService.getFile().subscribe((created: RevAutor[]) => {
      console.log(created);
      if (created != null) {
        this.revistas = created;

      } else {
        alert("ERROR AQUI");
      }

    }, (error: any) => {
      alert("ERROR AL GUARDAR" + error);
    });;

  }
  capturarFile(archivoA: File) {
    console.log(archivoA);

  }

  setMod(op: number) {
    this.opcio = op;
  }
  getMod(): number {
    return this.opcio;
  }

  modRev(id: number, nombre: string, descripcion: string, costoSuscripcion: number, like: Me_Gusta_E, Dcomentario: Comentario_E, Dsuscripcion: Suscrip_E) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.costoSuscripcion = costoSuscripcion;
    this.like = like;
    this.Dcomentario = Dcomentario;
    this.Dsuscripcion = Dsuscripcion;
    this.opcio = 1;
  }

  modRevFinal() {
    if (this.myForm.value.like != null) {
      this.like = this.myForm.value.like;
    }
    if (this.myForm.value.Dcomentario != null) {
      this.Dcomentario = this.myForm.value.Dcomentario;
    }
    if (this.myForm.value.Dsuscripcion != null) {
      this.Dsuscripcion = this.myForm.value.Dsuscripcion;

    }
    this.MenuUserService.UpdateRevista(new CRUDRev(this.id, this.nombre, this.descripcion, this.costoSuscripcion, this.like, this.Dcomentario, this.Dsuscripcion)).subscribe((created: Etiqueta) => {
      console.log(created);
      if (created != null) {
        alert("Se actualizo correctamente");
        this.MenuUserService.Op = 'perfil';

      } else {
        alert("No se pudo actualizar verifica los datos");

      }
    }, (error: any) => {
      alert("ERROR AL GUARDAR " + error);
    });
  }

  mostrarRevista(arch: string) {
    console.log(arch.toLocaleString())
    this.pre=arch.toString();
    
    
    const byteArray = [37, 80, 68, 70, 45, 49]

    // 2
    const bytesString = String.fromCharCode(...byteArray)
    
    // 3
    console.log('Bytes to string: ', bytesString)
    /*
    console.log(arch)
    const st= String.fromCharCode(arch)
    console.log('Bytes to string: ', st)
    const tp =st.charAt(arch);
    console.log('Bytes: ', tp)
    this.pre=st;*/

  };
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

  asignarEtiqueta(id: number, nombre: string) {
    this.getInfoEtiqueta();
    this.id = id;
    this.nombre = nombre;
    this.opcio = 2;
  }

  asignarEtiquetaFinal(){
    this.ObtenerInfoUserService.saveEtiquetaRev(new EtiquetaRev(this.myForm2.value.etiquetaN,this.id)).subscribe((created:Etiqueta)=>{
      console.log(created);
      if(created!=null){
        if(created.nombre_etiqueta=="yes"){
          alert("SE GUARDO ETIQUETA DE LA REVISTA");
        }
       
      }else{
        alert("PARECE QUE YA ESTA ASIGNADA ESTA ETIQUETA");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });

  }

  
}

