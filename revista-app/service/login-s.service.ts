import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/objects/Admin';
import { User } from 'src/objects/User';
@Injectable({
  providedIn: 'root'
})
export class LoginSService {
  public name:String = "";
  public type:String="";
  readonly API_URL = "http://localhost:8082/Revista-App";
  constructor(private httpClient: HttpClient) { }

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API_URL+"/login", user);
  }
  
  public createAdmin(user: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.API_URL+"/loginAdmin", user);
  }

  setName(name: String){
    this.name=name;
  }
  getName(){return this.name}

  setTypeUser(type: String){
    this.type=type;
  }
  getTypeUser(){return this.type}
}
