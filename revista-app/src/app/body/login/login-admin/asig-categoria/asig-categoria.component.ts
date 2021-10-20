import { Categoria } from 'src/objects/Categoria';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuAdminService } from 'service/menu-admin.service';
import { ObtenerInfoUserService } from 'service/obtener-info-user.service';

@Component({
  selector: 'app-asig-categoria',
  templateUrl: './asig-categoria.component.html',
  styleUrls: ['./asig-categoria.component.css']
})
export class AsigCategoriaComponent implements OnInit {
  formCategoria!:FormGroup;
  etiq!:Categoria;

  categoria!:Array<Categoria>;
  cat!:Categoria


  constructor(private service: MenuAdminService, private save:ObtenerInfoUserService,
    private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getCategoria();
    this.formCategoria= this.FormBuilder.group({
      nameCategoria:[null,Validators.required],
    })
  }

  getCategoria(){
    this.save.getCategoria().subscribe((created:Categoria[])=>{
      console.log(created);
      if(created!=null){
       this.categoria=created;
      }else{
        alert("ERROR AQUI");
      }

    },(error:any)=>{
      alert("NO HAY CATEGORIAS");
    });
  }

  saveCategoria(){
    if(this.formCategoria.valid){
      this.save.saveCategoria(new Categoria(this.formCategoria.value.nameCategoria))
      .subscribe((created:Categoria)=>{
        console.log(created);
        if(created!=null){
          alert("Se Guardo Correctamente"+ created.nombre_categoria);
          this.etiq=created;
          this.service.Opcion='';
        }else{
          alert("NO SE PUDO GUARDAR, PARECE QUE YA EXISTE LA ETIQUETA");
          
        }
      },(error:any)=>{
        alert("ERROR AL GUARDAR "+ error);
      });
     }
  }

}
