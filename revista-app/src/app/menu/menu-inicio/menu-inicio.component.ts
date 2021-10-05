import { ServiceHomeService } from 'service/service-home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent implements OnInit {

  constructor(private service: ServiceHomeService) { }

  ngOnInit(): void {
  }
  CambiarPagina(number:number){
    this.service.opcion=number;
  }
}
