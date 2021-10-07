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
  
}
