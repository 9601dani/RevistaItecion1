import { EtiquetaRev } from './../src/objects/EtiquetaRev';
import { SafeUrl } from '@angular/platform-browser';
import { Categoria } from './../src/objects/Categoria';
import { EtiquetaUser } from './../src/objects/EtiquetaUser';
import { Admin } from './../src/objects/Admin';
import { Etiqueta } from './../src/objects/Etiqueta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserComplete } from 'src/objects/UserComplete';

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



  
}
