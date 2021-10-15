import { Etiqueta } from 'src/objects/Etiqueta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CRUDRev } from 'src/objects/CRUDRev';
import { Observable } from 'rxjs';

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
}
