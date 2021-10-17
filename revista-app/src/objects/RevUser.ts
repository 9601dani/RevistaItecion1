import { Etiqueta } from "./Etiqueta";

export class RevUser{
    descripcion!:string;
    categoria!:string;
    etiquetas!:Array<Etiqueta>;
    nombre_usuario!:string;
    cantidad_like!:number;

    constructor(descripcion:string,categoria:string,etiquetas:Array<Etiqueta>,nombre_usuario:string,cantidad_like:number){
        this.descripcion=descripcion;
        this.categoria=categoria
        this.etiquetas=etiquetas
        this.nombre_usuario=nombre_usuario
        this.cantidad_like=cantidad_like

    }

}