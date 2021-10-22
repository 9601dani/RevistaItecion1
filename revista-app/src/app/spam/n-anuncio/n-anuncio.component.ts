import { Anuncio } from 'src/objects/Anuncio';
import { AnuncioService } from './../../../../service/anuncio.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-n-anuncio',
  templateUrl: './n-anuncio.component.html',
  styleUrls: ['./n-anuncio.component.css']
})
export class NAnuncioComponent implements OnInit {

  constructor(private AnuncioService:AnuncioService, private sanitizer:DomSanitizer) { }
descripcion!:string;
texto!:string;
contenido!:string;
url!:string;
tipo!:string
// que tipo se mostrara
opcionTipo:number=0;
  ngOnInit(): void {
    this.getAnuncio();
  }

  getAnuncio(){
    this.AnuncioService.getAnuncio().subscribe((created:Anuncio)=>{
      console.log(created)
      if(created!=null){
        this.descripcion=created.des_anuncio;
        this.texto=created.texto;
        this.contenido=created.contenido
        this.url=created.url
        this.tipo=created.nombre_tipo 
        this.changeTipo(this.tipo)
      }else{
        alert("ERROR EN EL GET DE ANUNCIOS")
      }

    })
  }

  changeTipo(tipo:string){
    if(tipo=="TEXTO"){
      this.opcionTipo=1;
    }else if(tipo=="TEXTO_Y_IMAGEN"){
      this.opcionTipo=2;
    }else if(tipo=="TEXTO_Y_VIDEO"){
      this.opcionTipo=3;
    }
  }

  getTipo():number{
    return this.opcionTipo
  }

  getLink():SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl( this.contenido)
  }
}
