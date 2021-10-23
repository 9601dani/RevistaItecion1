import { Comentario } from './../src/objects/Comentario';
import { Recaudacion } from './../src/objects/Recaudacion';
import { Respuesta } from './../src/objects/Respuesta';
import { Suscripcion } from './../src/objects/Suscripcion';
import { RevUser } from './../src/objects/RevUser';
import { RevistaForAdmin } from './../src/objects/RevistaForAdmin';
import { Etiqueta } from 'src/objects/Etiqueta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CRUDRev } from 'src/objects/CRUDRev';
import { Observable } from 'rxjs';
import { RevAutor } from 'src/objects/RevAutor';
import { ComentarioMostrar } from 'src/objects/ComentarioMostrar';

@Injectable({
  providedIn: 'root'
})
export class MenuUserService {
  Op:string="perfil";
  readonly API_URL = "http://localhost:8082/Revista-App";
  constructor(private httpClient: HttpClient) { }

  public UpdateRevista(rev: CRUDRev): Observable<Etiqueta> {
    return this.httpClient.post<Etiqueta>(this.API_URL+"/actuRev", rev);
  }
  public getRevistasUser(): Observable<Array<RevistaForAdmin>> {
    return this.httpClient.get<Array<RevistaForAdmin>>(this.API_URL+"/getRevistasUser");
  }
  public getRevistasSus(nombre:string): Observable<Array<RevistaForAdmin>> {
    
    let httpParams = new HttpParams()
    .append("nombre", nombre);
    return this.httpClient.get<Array<RevistaForAdmin>>(this.API_URL+"/getRevistasSus",{ params: httpParams});
  }
  public getInfoRevUser(id:number): Observable<RevUser> {
    let httpParams = new HttpParams()
    .append("id", id);
    return this.httpClient.post<RevUser>(this.API_URL+"/getRevistasUser","je",{ params: httpParams});
  }
  public getRevistasForName(name:string): Observable<Array<RevistaForAdmin>> {
    let httpParams = new HttpParams()
    .append("name", name);
    return this.httpClient.post<Array<RevistaForAdmin>>(this.API_URL+"/getRevistasForName","je",{ params: httpParams});
  }
  public getRevistasForCategoria(categoria:string): Observable<Array<RevistaForAdmin>> {
    let httpParams = new HttpParams()
    .append("categoria", categoria);
    return this.httpClient.get<Array<RevistaForAdmin>>(this.API_URL+"/getRevistasForName",{ params: httpParams});
  }

  public saveSuscripcion(sus:Suscripcion): Observable<Respuesta> {
    return this.httpClient.post<Respuesta>(this.API_URL+"/saveSuscripcion",sus);
  }
  public updateSuscripcion(sus:Suscripcion): Observable<Respuesta> {
    console.log(sus)
    return this.httpClient.post<Respuesta>(this.API_URL+"/updateSuscripcionFinal",sus);
  }
  public saveRecaudacion(recaudacion:Recaudacion): Observable<Respuesta> {
    console.log(recaudacion)
    //quitar x
    return this.httpClient.post<Respuesta>(this.API_URL+"/saveRecaudacion",recaudacion);
  }
  public infoSus(user:string, id_revista:number): Observable<Suscripcion> {
    let httpParams = new HttpParams()
    .append("usuario", user)
    .append("id",id_revista);
    return this.httpClient.get<Suscripcion>(this.API_URL+"/getInfoSuscripcion",{ params: httpParams});
  }

  public darLike(id:number,user:string): Observable<Respuesta> {
    let httpParams = new HttpParams()
    .append("id",id)
    .append("user",user)
    return this.httpClient.get<Respuesta>(this.API_URL+"/getDarLike",{ params: httpParams});
  }
  public quitarLike(id:number,user:string): Observable<Respuesta> {
    let httpParams = new HttpParams()
    .append("id",id)
    .append("user",user)
    return this.httpClient.post<Respuesta>(this.API_URL+"/getDarLike","f",{ params: httpParams});
  }
  public saveComentario(coment:Comentario): Observable<Respuesta> {
    return this.httpClient.post<Respuesta>(this.API_URL+"/saveComentario",coment);
  }

  public getComentarios(id_revista:number): Observable<Array<ComentarioMostrar>> {
    let httpParams = new HttpParams()
    .append("id_revista",id_revista)
    return this.httpClient.get<Array<ComentarioMostrar>>(this.API_URL+"/getComentarios",{ params: httpParams});
  }

}
