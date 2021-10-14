import { RevAutor } from './../../../../objects/RevAutor';
import { Rev } from './../../../../objects/Rev';
import { MenuAutorService } from './../../../../../service/menu-autor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-mis-revistas',
  templateUrl: './ver-mis-revistas.component.html',
  styleUrls: ['./ver-mis-revistas.component.css']
})
export class VerMisRevistasComponent implements OnInit {

  constructor(private MenuAutorService:MenuAutorService) {}

  ngOnInit(): void {
    this.getRevistas();
  }

  getRevistas(){
    this.MenuAutorService.getFile().subscribe((created:RevAutor[])=>{
      console.log(created);
      if(created!=null){
      }else{
        alert("ERROR AQUI");
      }

    },(error:any)=>{
      alert("ERROR AL GUARDAR"+ error);
    });;
    
  }

}
