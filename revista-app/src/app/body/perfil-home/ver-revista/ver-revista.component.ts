import { MenuUserService } from 'service/menu-user.service';
import { RevUser } from './../../../../objects/RevUser';
import { Component, OnInit } from '@angular/core';
import { RevAutor } from 'src/objects/RevAutor';
import { RevistaForAdmin } from 'src/objects/RevistaForAdmin';
import { Etiqueta } from 'src/objects/Etiqueta';

@Component({
  selector: 'app-ver-revista',
  templateUrl: './ver-revista.component.html',
  styleUrls: ['./ver-revista.component.css']
})
export class VerRevistaComponent implements OnInit {

  constructor(private MenuUserService:MenuUserService) { }
//Revistas para usuario
revis!: Array<RevUser>;
revi!: RevUser;
//Revistas completas
revista!: Array<RevistaForAdmin>;
rev1!: RevistaForAdmin;
//opciones para ver o no ver
opcio!: number;
//etiquetas
etiquetas!:Array<Etiqueta>
et!:Etiqueta;
//datos necesarios para mostrar
nameRev!:string;
  ngOnInit(): void {
    this.getRevistas();
  }

  getRevistas(){
    this.MenuUserService.getRevistasUser().subscribe((created: RevistaForAdmin[]) => {
      console.log(created);
      if (created != null) {
        this.revista = created;
        
      } else {
        alert("ERROR AQUI");
      }

    }, (error: any) => {
      alert("ERROR AL GUARDAR" + error);
    });;

  }
  setMod(op: number) {
    this.opcio = op;
  }
  getMod(): number {
    return this.opcio;
  }
  verPre(id_revista: number,nombre:string) {
    this.MenuUserService.getInfoRevUser(id_revista).subscribe((created: RevUser) => {
      console.log(created);
      if (created != null) {
        this.revi = created;
        this.etiquetas=this.revi.etiquetas;
        this.nameRev=nombre;
      } else {
        alert("ERROR AQUI");
      }

    }, (error: any) => {
      alert("ERROR AL GUARDAR" + error);
    });;
    this.opcio = 1;
    console.log(id_revista)
  }
  

}
