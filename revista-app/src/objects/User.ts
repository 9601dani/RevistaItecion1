import { UserType } from "./UserType";

export class User {
    nombre_usuario!: String;
    password!: String;
    nombre!: String;
    tipo_usuario!: UserType;
    constructor(nombre_usuario:String, password:String,nombre:String, tipo_usuario:UserType){
        this.nombre_usuario=nombre_usuario;
        this.password= password;
        this.nombre= nombre;
        this.tipo_usuario= tipo_usuario;
    }

    get getNombreUsuario(){return this.nombre_usuario;}
    get getPassword(){return this.password;}
    get getNombre(){return this.nombre;}
    get getTipoUsuario(){return this.tipo_usuario;}
    set setNombreUsuario(nombre_usuario:String){this.nombre_usuario=nombre_usuario;}
    set setPassword(password:String){this.password=password;}
    set setNombre(nombre:String){this.nombre=nombre;}
    set setTipoUsuario(tipo_usuario:UserType){this.tipo_usuario=tipo_usuario;}
}
