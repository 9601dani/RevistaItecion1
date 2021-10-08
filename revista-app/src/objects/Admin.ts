import { AdminType } from './AdminType';

export class Admin {
    nombre_usuario!:String;
    password!:String;
    nombre!:String;
    estado!:AdminType;

    constructor(nombre_usuario:String, password:String, nombre:String, estado:AdminType){
        this.nombre_usuario=nombre_usuario;
        this.password=password;
        this.nombre=nombre;
        this.estado=estado;
    }

  public getNombre_usuario(): String {
    return this.nombre_usuario;
  }

  public getPassword(): String {
    return this.password;
  }

  public getNombre(): String {
    return this.nombre;
  }

  public getEstado(): AdminType {
    return this.estado;
  }

  public setNombre_usuario(nombre_usuario:String){
    this.nombre_usuario=nombre_usuario;
  }

  public setPassword(password:String){
    this.password=password;
  }

  public setNombre(nombre:String){
    this.nombre=nombre;
  }

  public setEstado(estado:AdminType){
    this.estado=estado;
  }









}