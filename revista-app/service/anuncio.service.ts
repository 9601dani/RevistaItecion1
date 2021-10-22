import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anuncio } from 'src/objects/Anuncio';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  readonly API_URL = "http://localhost:8082/Revista-App";
  constructor(private httpClient:HttpClient) { }

  public getAnuncio(): Observable<Anuncio> {
    return this.httpClient.get<Anuncio>(this.API_URL+"/getAnuncio");
  }
}
