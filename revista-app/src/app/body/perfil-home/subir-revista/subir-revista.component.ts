import { ObtenerInfoUserService } from './../../../../../service/obtener-info-user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/objects/Categoria';

@Component({
  selector: 'app-subir-revista',
  templateUrl: './subir-revista.component.html',
  styleUrls: ['./subir-revista.component.css']
})
export class SubirRevistaComponent implements OnInit {
formRevista!:FormGroup;
categorias!:Array<Categoria>;
cat!:Categoria;
  constructor(private FormBuilder:FormBuilder,private ObtenerInfoUserService: ObtenerInfoUserService) { 
   
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

  }
}
