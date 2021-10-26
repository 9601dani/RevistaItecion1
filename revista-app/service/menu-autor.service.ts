import { RevAutor } from './../src/objects/RevAutor';
import { Etiqueta } from 'src/objects/Etiqueta';
import { Revista } from './../src/objects/Revista';
import { Rev } from './../src/objects/Rev';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { User } from 'src/objects/User';
import { RevistaForAdmin } from 'src/objects/RevistaForAdmin';
import { AdmitirRevista } from 'src/objects/AdmitirRevista';
import { Respuesta } from 'src/objects/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class MenuAutorService {
  readonly API_URL = "http://localhost:8082/Revista-App";
  revs!:Revista;
  user!:User;
  constructor(private httpClient: HttpClient) { }

  public saveRevista(revista: Revista): Observable<Revista> {
    console.log(revista);
    return this.httpClient.post<Revista>(this.API_URL+"/saveRevista", revista);
  }

  public getFile(): Observable<Array<RevAutor>> {
    this.user=JSON.parse(<string>localStorage.getItem('userS'));
    let httpParams = new HttpParams()
    .append("user", this.user.nombre_usuario);
    return this.httpClient.get<Array<RevAutor>>(this.API_URL+"/getFileautor",{ params: httpParams});
  }
  public getFiles(): Observable<Array<RevistaForAdmin>> {
    return this.httpClient.get<Array<RevistaForAdmin>>(this.API_URL+"/getRevEspera");
  }


  public fileUpload(fileToUpload: string,pdf:string): Observable<Etiqueta> {
    const formData= new FormData();

    formData.append("datafile", fileToUpload, "fileToUpload.name");
    this.revs=JSON.parse(<string>localStorage.getItem('nRev'));
    let date = formatDate(new Date(this.revs.fecha_publicacion),'yyyy-MM-dd','en-US');
    let httpParams = new HttpParams()
    .append("nombre_rev", this.revs.nombre_revista)
    .append("fecha_pu", date)
    .append("descripcion", this.revs.descripcion)
    .append("estado", this.revs.estado_revista)
    .append("costo", this.revs.costo_suscripcion)
    .append("me", this.revs.me_gusta)
    .append("com", this.revs.comentario)
    .append("sus", this.revs.suscripciones)
    .append("ca", this.revs.nombre_categoria)
    .append("user", this.revs.nombre_usuario);
    

    return this.httpClient.post<Etiqueta>(this.API_URL+"/onlyFile", this.revs,{ params: httpParams});
  }

  public admitirRev(rev: AdmitirRevista): Observable<Etiqueta> {
    let date = formatDate(new Date(rev.fecha_aceptacion),'yyyy-MM-dd','en-US');
    let date1 = formatDate(new Date(rev.fecha_mod_costo),'yyyy-MM-dd','en-US');
    let httpParams = new HttpParams()
    .append("id", rev.id_revista)
    .append("fecha_acep", date)
    .append("costo", rev.costo_dia)
    .append("fecha_mod", date1)
    .append("estadoRev", rev.estado_revista)
    return this.httpClient.get<Etiqueta>(this.API_URL+"/aceptarRev",{ params: httpParams});
  }

  //REPORTES DE AUTOR
  public getComenReport(fechaI:string, fechaF:string): Observable<Respuesta>{
    this.user=JSON.parse(<string>localStorage.getItem('userS'));
    let httpParams = new HttpParams()
    .append("fechaI", fechaI)
    .append("fechaF", fechaF)
    .append("user",this.user.nombre_usuario)
    return this.httpClient.get<Respuesta>(this.API_URL+"/oneReport", {params:httpParams} );
  }
  public getComeExport(fechaI:string, fechaF:string){
    console.log("mande"+fechaI)
    console.log("mande"+fechaF)
    this.user=JSON.parse(<string>localStorage.getItem('userS'));
    let httpParams = new HttpParams()
    .append("fechaI", fechaI)
    .append("fechaF", fechaF)
    .append("user",this.user.nombre_usuario)
    return this.httpClient.get(this.API_URL+"/exportReporte1", {params:httpParams} );
  }
    //REPORTES DE AUTOR
    public getComenReportForRev(name:string): Observable<Respuesta>{
      this.user=JSON.parse(<string>localStorage.getItem('userS'));
      let httpParams = new HttpParams()
      .append("nom_rev", name)
      .append("user",this.user.nombre_usuario)
      return this.httpClient.post<Respuesta>(this.API_URL+"/oneReport","yes", {params:httpParams} );
    }

    public getComenReportForRevExport(name:string){
      this.user=JSON.parse(<string>localStorage.getItem('userS'));
      let httpParams = new HttpParams()
      .append("nom_rev", name)
      .append("user",this.user.nombre_usuario)
      return this.httpClient.post(this.API_URL+"/exportReporte1t","yes", {params:httpParams} );
    }

  //REPORTE 2
  public getSusReport(fechaI:string, fechaF:string): Observable<Respuesta>{
    this.user=JSON.parse(<string>localStorage.getItem('userS'));
    let httpParams = new HttpParams()
    .append("fechaI", fechaI)
    .append("fechaF", fechaF)
    .append("user",this.user.nombre_usuario)
    return this.httpClient.get<Respuesta>(this.API_URL+"/report2User", {params:httpParams} );
  }

  //REPORTE 4
  public getGananciasReport(fechaI:string, fechaF:string): Observable<Respuesta>{
    this.user=JSON.parse(<string>localStorage.getItem('userS'));
    let httpParams = new HttpParams()
    .append("fechaI", fechaI)
    .append("fechaF", fechaF)
    .append("user",this.user.nombre_usuario)
    return this.httpClient.get<Respuesta>(this.API_URL+"/RepFour", {params:httpParams} );
  }
}
