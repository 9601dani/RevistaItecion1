import { ObtenerInfoUserService } from './../../../../service/obtener-info-user.service';
import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mostrar-pdf',
  templateUrl: './mostrar-pdf.component.html',
  styleUrls: ['./mostrar-pdf.component.css']
})
export class MostrarPdfComponent implements OnInit {
  public previsualizacion!: String;
  constructor(private ObtenerInfoUserService: ObtenerInfoUserService) { }

  ngOnInit(): void {
    this.previsualizacion= this.ObtenerInfoUserService.getPrevisualizacion();
  }

}
