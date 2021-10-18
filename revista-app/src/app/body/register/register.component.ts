import { DomSanitizer } from '@angular/platform-browser';
import { ObtenerInfoUserService } from './../../../../service/obtener-info-user.service';
import { NewUsuarioService } from 'service/new-usuario.service';
import { ServiceHomeService } from './../../../../service/service-home.service';
import { User } from './../../../objects/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, FormControl, Validators } from '@angular/forms';
import { LoginSService } from 'service/login-s.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  previsualizacion!: string;
  arch!:string;
public myForm!: FormGroup;
  constructor(private NewUsuarioService:NewUsuarioService,private FormBuilder:FormBuilder, private service:ServiceHomeService,
    private ObtenerInfoUserService:ObtenerInfoUserService, private sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    this.myForm=this.FormBuilder.group({
      NombreU:[null,Validators.required],
      Password:[null,Validators.required],
      Nombre:[null,Validators.required],
      Type:[null,Validators.required],
      fileRevista:[null,Validators.required]
    })
  }

  saveUser(){
   if(this.myForm.valid){
    this.NewUsuarioService.createUser(new User(this.myForm.value.NombreU,this.myForm.value.Password,this.myForm.value.Nombre,this.previsualizacion,this.myForm.value.Type))
    .subscribe((created:User)=>{
      console.log(created);
      if(created!=null){
        alert("SE CREO CORRECTAMENTE ");
        this.CambiarPagina(1);
      }else{
        alert("YA EXISTE EL NOMBRE DE USUARIO");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+error);
    });
   }
  }

  CambiarPagina(number:number){
    this.service.opcion=number;
  }

  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.arch=archivoCapturado;
      this.previsualizacion = imagen.base;
      this.ObtenerInfoUserService.changePrevisualizacion(this.previsualizacion);
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
