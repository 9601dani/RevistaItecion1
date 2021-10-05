import { ServiceHomeService } from './../../../../service/service-home.service';
import { User } from './../../../objects/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, FormControl, Validators } from '@angular/forms';
import { NewUsuarioService } from 'service/new-usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public myForm!: FormGroup;
  constructor(private NewUsuarioService:NewUsuarioService, 
    private FormBuilder:FormBuilder, private service:ServiceHomeService) {}

  ngOnInit(): void {
    this.myForm=this.FormBuilder.group({
      NombreU:[null,Validators.required],
      Password:[null,Validators.required],
      Nombre:[null,Validators.required],
      Type:[null,Validators.required]
    })
  }

  saveUser(){
   if(this.myForm.valid){
    this.NewUsuarioService.createUser(new User(this.myForm.value.NombreU,this.myForm.value.Password,this.myForm.value.Nombre,this.myForm.value.Type))
    .subscribe((created:User)=>{
      console.log(created);
      if(created!=null){
        alert("SE CREO CORRECTAMENTE "+this.myForm.value.NombreU)
        this.CambiarPagina(1);
      }else{
        alert("YA EXISTE EL NOMBRE DE USUARIO")
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+error);
    });
   }
  }
  CambiarPagina(number:number){
    this.service.opcion=number;
  }
}
