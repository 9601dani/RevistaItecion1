import { FileImg } from './../src/objects/File';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anuncio } from 'src/objects/Anuncio';
import { Respuesta } from 'src/objects/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  readonly API_URL = "http://localhost:8082/Revista-App";
  constructor(private httpClient:HttpClient) { }

  public getAnuncio(): Observable<Anuncio> {
    return this.httpClient.get<Anuncio>(this.API_URL+"/getAnuncio");
  }
  public getAllAnuncio(): Observable<Array<Anuncio>> {
    return this.httpClient.post<Array<Anuncio>>(this.API_URL+"/getAnuncio", "obe");
  }
  public activarAnuncio(id:number): Observable<Respuesta> {
    let httpParams = new HttpParams()
    .append("id", id);
    return this.httpClient.post<Respuesta>(this.API_URL+"/changeEstadoAnun", "obe",{ params: httpParams});
  }
  public desactivarAnuncio(id:number): Observable<Respuesta> {
    let httpParams = new HttpParams()
    .append("id", id);
    return this.httpClient.get<Respuesta>(this.API_URL+"/changeEstadoAnun",{ params: httpParams});
  }
  public updateAnuncio(id:number,des:string,texto:string,url:string): Observable<Respuesta> {
    let httpParams = new HttpParams()
    .append("id", id)
    .append("descripcion", des)
    .append("texto", texto)
    .append("url", url)
    return this.httpClient.get<Respuesta>(this.API_URL+"/updateAn",{ params: httpParams});
  }
  public updateImg(img:FileImg, id:number): Observable<Respuesta> {
    let httpParams = new HttpParams()
    .append("id", id)
    return this.httpClient.post<Respuesta>(this.API_URL+"/updateAn",img,{ params: httpParams});
  }

  public updateVideo(id:number, link:string): Observable<Respuesta> {
    let httpParams = new HttpParams()
    .append("id", id)
    .append("link",link)
    return this.httpClient.get<Respuesta>(this.API_URL+"/upVideo",{ params: httpParams});
  }
}
