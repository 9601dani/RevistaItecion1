import { MenuUserService } from './../../../../../service/menu-user.service';
import { Categoria } from './../../../../objects/Categoria';
import { ObtenerInfoUserService } from './../../../../../service/obtener-info-user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Etiqueta } from 'src/objects/Etiqueta';
import { RevistaForAdmin } from 'src/objects/RevistaForAdmin';
import { RevUser } from 'src/objects/RevUser';

@Component({
  selector: 'app-buscar-revista',
  templateUrl: './buscar-revista.component.html',
  styleUrls: ['./buscar-revista.component.css']
})
export class BuscarRevistaComponent implements OnInit {

  constructor(private FormBuilder:FormBuilder, private ObtenerInfoUserService:ObtenerInfoUserService,
    private MenuUserService:MenuUserService) { }
//control de form
formControl!:number;
formControl2!:number;
//formulario de nombre
myForm!:FormGroup
myForm2!:FormGroup
//etiquetas a mostrar
categorias!:Array<Categoria>
cat!:Categoria;
//revistas completas
revista!: Array<RevistaForAdmin>;
rev1!: RevistaForAdmin;
//info etiquetas de revista
etiquetas!:Array<Etiqueta>
et!:Etiqueta;
//revitas del usuario
//Revistas para usuario
revis!: Array<RevUser>;
revi!: RevUser;
//datos necesarios para mostrar
nameRev!:string;
//opciones para ver o no ver
opcio!: number;
  ngOnInit(): void {
    this.myForm = this.FormBuilder.group({
      name: [null, Validators.required],
    })
    this.myForm2 = this.FormBuilder.group({
      categoria: [null, Validators.required],
    })
  }
setForm(option:number){
  if(option==2){
    this.getCategoria();
  }
  this.formControl=option;
}
getForm():number{
  return this.formControl;
}
setForm2(option:number){
  this.formControl2=option;
}
getForm2():number{
  return this.formControl2;
}
setMod(op: number) {
  this.opcio = op;
}
getMod(): number {
  return this.opcio;
}

serchForName(){
  this.formControl=0
  this.formControl2=0;
  this.opcio=0;
  this.MenuUserService.getRevistasForName(this.myForm.value.name).subscribe((created: RevistaForAdmin[]) => {
    console.log(created);
    if (created != null) {
      this.revista = created;
      this.setForm2(1);
    } else {
      alert("NO HAY REVISTAS CON ESE NOMBRE");
    }

  }, (error: any) => {
    alert("ERROR AL GUARDAR" + error);
  });;

}
serchForCategoria(){
  this.formControl=0
  this.formControl2=0;
  this.opcio=0;
  console.log(this.myForm2.value.categoria)
  this.formControl=0
  this.formControl2=0;
  this.opcio=0;
  this.MenuUserService.getRevistasForCategoria(this.myForm2.value.categoria).subscribe((created: RevistaForAdmin[]) => {
    console.log(created);
    if (created != null) {
      this.revista = created;
      this.setForm2(1);
    } else {
      alert("NO HAY REVISTAS CON ESTA CATEGORIA AUN");
    }

  }, (error: any) => {
    alert("NO HAY REVISTAS CON ESTA CATEGORIA AUN");
  });;

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

verPre(id_revista: number,nombre:string) {
  this.MenuUserService.getInfoRevUser(id_revista).subscribe((created: RevUser) => {
    console.log(created);
    if (created != null) {
      this.revi = created;
      this.etiquetas=this.revi.etiquetas;
      this.nameRev=nombre;
      this.opcio=1;
      
    } else {
      alert("ERROR AQUI");
    }

  }, (error: any) => {
    alert("ERROR AL GUARDAR" + error);
  });;

  console.log(id_revista)
}

}
