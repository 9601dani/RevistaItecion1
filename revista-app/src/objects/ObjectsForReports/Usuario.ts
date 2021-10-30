export class Usuario{
    nombre_usuario!:string;
    des_personal:string;
    nombre!:string;

    constructor(nombre_usuario:string,nombre:string,des_personal:string) {
        this.nombre_usuario = nombre_usuario;
        this.nombre = nombre;
        this.des_personal = des_personal;
    }
}