import { Categoria } from 'src/objects/Categoria';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuAdminService } from 'service/menu-admin.service';
import { ObtenerInfoUserService } from 'service/obtener-info-user.service';
import { Respuesta } from 'src/objects/Respuesta';

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
  categoriaAnterior!:string;
  nuevaCategoria!:string;
  mostrarUpdate:number=0;


  constructor(private service: MenuAdminService, private save:ObtenerInfoUserService,
    private FormBuilder:FormBuilder, private MenuAdminService:MenuAdminService) { }

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
  deleteCategoria(nombre_etiqueta:string){
    this.MenuAdminService.deleteCategoria(nombre_etiqueta).subscribe((created:Respuesta)=>{
      console.log(created);
      if(created!=null){
        alert("Se elimino la etiqueta "+ created.respuesta);
        this.service.Opcion='';
      }else{
        alert("NO SE PUDO ELIMINAR ");
        
      }
    },(error:any)=>{
      alert("ERROR AL GUARDAR "+ error);
    })

  }
  updateCategoria(nombre_categoria:string){
  this.categoriaAnterior=nombre_categoria
  this.nuevaCategoria=nombre_categoria
  this.mostrarUpdate=1;
  }
  updateCategoriaFinal(){
    this.MenuAdminService.updateCategoria(this.categoriaAnterior, this.nuevaCategoria).subscribe((created:Respuesta)=>{
      console.log(created);
      if(created!=null){
        alert("SE ACTUALIZO "+this.categoriaAnterior+" a "+ created.respuesta);
        this.service.Opcion='';
      }else{
        alert("NO SE PUDO EDITAR");
        
      }
    },(error:any)=>{
      alert("NO SE PUDO EDITAR");
    })

    this.mostrarUpdate=0;
    }
  getMostrar():number{
    return this.mostrarUpdate
  }

}
