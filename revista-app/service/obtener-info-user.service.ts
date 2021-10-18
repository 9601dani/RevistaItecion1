import { Rev } from './../src/objects/Rev';
import { Porcentaje } from './../src/objects/Porcentaje';
import { EtiquetaRev } from './../src/objects/EtiquetaRev';
import { SafeUrl } from '@angular/platform-browser';
import { Categoria } from './../src/objects/Categoria';
import { EtiquetaUser } from './../src/objects/EtiquetaUser';
import { Admin } from './../src/objects/Admin';
import { Etiqueta } from './../src/objects/Etiqueta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserComplete } from 'src/objects/UserComplete';
import { Rev2 } from 'src/objects/Rev2';

@Injectable({
  providedIn: 'root'
})
export class ObtenerInfoUserService {
  previsualizacion!:String;
  readonly API_URL = "http://localhost:8082/Revista-App";
  constructor(private httpClient: HttpClient) { }

  public createUser(user: UserComplete): Observable<UserComplete> {
    return this.httpClient.post<UserComplete>(this.API_URL+"/infoUser", user);
  }
  public updateUser(user: UserComplete): Observable<UserComplete> {
    return this.httpClient.post<UserComplete>(this.API_URL+"/updateUser", user);
  }

  public getInfoAdmin(): Observable<Array<Admin>> {
    return this.httpClient.post<Array<Admin>>(this.API_URL+"/getAdmins","user");
  }

  public updateAdmin(user:Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.API_URL+"/updateA",user);
  }
  public outAdmin(user:Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.API_URL+"/updateAdmin",user);
  }

  public saveEtiqueta(user:Etiqueta): Observable<Etiqueta> {
    return this.httpClient.post<Etiqueta>(this.API_URL+"/saveEtiqueta",user);
  }

  public saveEtiquetaRev(et:EtiquetaRev): Observable<Etiqueta> {
    return this.httpClient.post<Etiqueta>(this.API_URL+"/etiquetaRev",et);
  }

  public getEtiqueta(): Observable<Array<Etiqueta>>{
    return this.httpClient.post<Array<Etiqueta>>(this.API_URL+"/getEtiqueta","user");
  }
  public getCategoria(): Observable<Array<Categoria>>{
    return this.httpClient.post<Array<Categoria>>(this.API_URL+"/getCategoriaN","user");
  }

  public getEtiquetaUser(name:EtiquetaUser): Observable<EtiquetaUser>{
    return this.httpClient.post<EtiquetaUser>(this.API_URL+"/saveEtiquetaU",name);
  }
  changePrevisualizacion(pre:String){
    this.previsualizacion=pre;
  }
  getPrevisualizacion():String{
    return this.previsualizacion;

  }
  public getPorcentaje(): Observable<Array<Porcentaje>>{
    return this.httpClient.get<Array<Porcentaje>>(this.API_URL+"/porcentajeSoft");
  }
  public updatePorcentaje(porce:Porcentaje): Observable<Etiqueta>{
    return this.httpClient.post<Etiqueta>(this.API_URL+"/porcentajeSoft",porce);
  }

  public getMyEtiqueta(user:string): Observable<Array<Etiqueta>>{
    let httpParams = new HttpParams()
    .append("user", user);
    return this.httpClient.get<Array<Etiqueta>>(this.API_URL+"/getEtiquetasUser",{ params: httpParams});
  }
  public deleteMyEtiqueta(user:string,etiqueta:string): Observable<Etiqueta>{
    let httpParams = new HttpParams()
    .append("user", user)
    .append("etiqueta", etiqueta);
    return this.httpClient.post<Etiqueta>(this.API_URL+"/getEtiquetasUser",etiqueta,{ params: httpParams});
  }

  public getBytesFIle(cadena:Rev): Observable<Rev2>{
    console.log("voy a mandar"+ cadena.archivo)
    return this.httpClient.post<Rev2>(this.API_URL+"/getBytes",cadena);
  }
  
}
