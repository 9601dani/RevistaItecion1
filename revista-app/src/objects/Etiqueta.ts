export class Etiqueta{
    nombre_etiqueta!:String;
    constructor(nombre_etiqueta:String){
        this.nombre_etiqueta=nombre_etiqueta;
    }
    get GetEtiqueta(){return this.nombre_etiqueta};
    set SetEtiqueta(etiqueta:String){this.nombre_etiqueta=etiqueta};

}