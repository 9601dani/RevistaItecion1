import { Revista } from './../src/objects/Revista';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuAutorService {
  readonly API_URL = "http://localhost:8082/Revista-App";
  constructor(private httpClient: HttpClient) { }

  public saveRevista(revista: Revista): Observable<Revista> {
    console.log(revista);
    return this.httpClient.post<Revista>(this.API_URL+"/saveRevista", revista);
  }

}
