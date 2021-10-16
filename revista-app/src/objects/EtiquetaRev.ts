
export class EtiquetaRev{
    nombre_etiqueta!: String;
    id_revista!: number;


    constructor(nombre_etiqueta:String, id_revista:number){
        this.nombre_etiqueta=nombre_etiqueta;
        this.id_revista=id_revista;
    }
    
    get getNombre_etiqueta(){return this.nombre_etiqueta;}
    get getNombre_usuario(){return this.id_revista;}
    set setNombre_etiqueta(nombre_etiqueta:String){this.nombre_etiqueta=nombre_etiqueta;}
    set setNombre_usuario(id_revista:number){this.id_revista=id_revista;}
}