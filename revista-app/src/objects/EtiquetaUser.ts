
export class EtiquetaUser{
    nombre_etiqueta!: String;
    nombre_usuario!: String;


    constructor(nombre_etiqueta:String, nombre_usuario:String){
        this.nombre_etiqueta=nombre_etiqueta;
        this.nombre_usuario=nombre_usuario;
    }
    
    get getNombre_etiqueta(){return this.nombre_etiqueta;}
    get getNombre_usuario(){return this.nombre_usuario;}
    set setNombre_etiqueta(nombre_etiqueta:String){this.nombre_etiqueta=nombre_etiqueta;}
    set setNombre_usuario(nombre_usuario:String){this.nombre_usuario=nombre_usuario;}
}