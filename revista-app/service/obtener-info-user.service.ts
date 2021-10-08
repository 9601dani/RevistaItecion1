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

  
}
