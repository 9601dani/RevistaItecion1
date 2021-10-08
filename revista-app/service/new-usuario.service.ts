import { Admin } from './../src/objects/Admin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/objects/User';
@Injectable({
  providedIn: 'root'
})
export class NewUsuarioService {

  readonly API_URL = "http://localhost:8082/Revista-App";

  constructor(private httpClient: HttpClient) { }

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API_URL+"/user", user);
  }

  public createAdmin(user: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.API_URL+"/newAdmin", user);
  }
}
