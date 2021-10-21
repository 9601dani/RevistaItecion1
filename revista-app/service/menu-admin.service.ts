import { Respuesta } from 'src/objects/Respuesta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from 'src/objects/Anuncio';

@Injectable({
  providedIn: 'root'
})
export class MenuAdminService {
  Opcion:string='';
  readonly API_URL = "http://localhost:8082/Revista-App";
  constructor(private httpClient: HttpClient) { }

  public saveAnuncioText(anuncio: Anuncio, dias:number): Observable<Respuesta> {
    console.log(anuncio);
    let httpParams = new HttpParams()
    .append("dias", dias);
    return this.httpClient.post<Respuesta>(this.API_URL+"/saveAnuncioText", anuncio,{ params: httpParams});
  }
}
