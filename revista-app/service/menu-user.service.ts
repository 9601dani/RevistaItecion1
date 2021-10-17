import { RevUser } from './../src/objects/RevUser';
import { RevistaForAdmin } from './../src/objects/RevistaForAdmin';
import { Etiqueta } from 'src/objects/Etiqueta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CRUDRev } from 'src/objects/CRUDRev';
import { Observable } from 'rxjs';
import { RevAutor } from 'src/objects/RevAutor';

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
}
