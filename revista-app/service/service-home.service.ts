import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceHomeService {
   opcion:number=0;
  serviceUrl: any;
  span:number=0;
  constructor() { }

  getSpan():number{
    return this.span
  }

}
