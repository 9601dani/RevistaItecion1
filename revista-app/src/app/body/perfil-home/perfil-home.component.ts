import { ServiceHomeService } from 'service/service-home.service';
import { ObtenerInfoUserService } from './../../../../service/obtener-info-user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserType } from 'src/objects/UserType';
import { UserComplete } from 'src/objects/UserComplete';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuUserService } from 'service/menu-user.service';

@Component({
  selector: 'app-perfil-home',
  templateUrl: './perfil-home.component.html',
  styleUrls: ['./perfil-home.component.css']
})
export class PerfilHomeComponent implements OnInit {
  usernamefinal!:string;
  photo!:string;  
  userF!:UserComplete;
  previsualizacion!:string;

  private selectedFile!:string;
  imgURL: any;

  constructor(private route: ActivatedRoute,private  ObtenerInfoUserService:ObtenerInfoUserService,
    private sanitizer: DomSanitizer, private MenuUserService: MenuUserService,
    private ServiceHomeService:ServiceHomeService) { }
  
    ngOnInit() {
      this.ServiceHomeService.span=0;
    let username= this.route.snapshot.paramMap.get("variable");
    this.ObtenerInfoUserService.createUser(new UserComplete(String(username),'  ',' ',' ',' ',this.photo,UserType.AUTOR))
    .subscribe((usuario:UserComplete)=>{
      this.userF= usuario;
      localStorage.removeItem("userComplete");
      localStorage.setItem("userComplete",JSON.stringify(usuario));
     // this.mostrarRevista(usuario.foto)
      this.previsualizacion=this.userF.foto
      
    })
  }
  extraerBase64 = async ($event: any) => new Promise((resolve) =>{
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      console.log("aqui si pase");
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
      console.log("retorne null"+ e);
      return null;
    }
  })

  CambiarPagina(op:string){
    this.MenuUserService.Op=op;
  }

  mostrarRevista(arch:string){
    let reader = new FileReader();
    reader.readAsDataURL(new Blob([arch],{type: 'application/pdf'}));
    reader.onload = (event2) => {
      this.imgURL = reader.result;
      this.imgURL= this.sanitizer.bypassSecurityTrustUrl(this.imgURL);
    };
  
 
   }
  
}
