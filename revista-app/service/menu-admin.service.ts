import { Tipo_Anuncio } from './../src/objects/Tipo_Anuncio';
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

  public deleteCategoria(categoria:string): Observable<Respuesta>{
    let httpParams = new HttpParams()
    .append("categoria", categoria);
    return this.httpClient.get<Respuesta>(this.API_URL+"/cambiosCategoria",{ params: httpParams});
  }
  public updateCategoria(categoria:string, categoriaN:string): Observable<Respuesta>{
    let httpParams = new HttpParams()
    .append("categoria", categoria)
    .append("categoriaN",categoriaN);
    return this.httpClient.post<Respuesta>(this.API_URL+"/cambiosCategoria","jeje",{ params: httpParams});
  }
  public getCostos(): Observable<Array<Tipo_Anuncio>>{
    return this.httpClient.get<Array<Tipo_Anuncio>>(this.API_URL+"/tiposAnuncio");
  }
  public updateCostoTipo(tipo:string, costo:number): Observable<Respuesta>{
    let httpParams = new HttpParams()
    .append("tipo", tipo)
    .append("costo",costo);
    return this.httpClient.post<Respuesta>(this.API_URL+"/tiposAnuncio","jeje",{ params: httpParams});
  }

  public getTestReport(): Observable<Respuesta>{
    return this.httpClient.get<Respuesta>(this.API_URL+"/testReport");
  }
  public getSusReport(fechaI:string, fechaF:string): Observable<Respuesta>{
    let httpParams = new HttpParams()
    .append("fechaI", fechaI)
    .append("fechaF", fechaF)
    return this.httpClient.get<Respuesta>(this.API_URL+"/revConMasComents", {params:httpParams} );
  }
  public getMoreSusReport(fechaI:string, fechaF:string): Observable<Respuesta>{
    let httpParams = new HttpParams()
    .append("fechaI", fechaI)
    .append("fechaF", fechaF)
    return this.httpClient.post<Respuesta>(this.API_URL+"/revConMasComents", "Es",{params:httpParams} );
  }

}
