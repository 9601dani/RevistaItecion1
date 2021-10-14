import { UserType } from "./UserType";

export class User {
    nombre_usuario!: string;
    password!: string;
    nombre!: string;
    tipo_usuario!: UserType;

    
    constructor(nombre_usuario:string, password:string,nombre:string, tipo_usuario:UserType){
        this.nombre_usuario=nombre_usuario;
        this.password= password;
        this.nombre= nombre;
        this.tipo_usuario= tipo_usuario;
    }
}
