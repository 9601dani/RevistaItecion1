export class Tipo_Anuncio{
    nombre_tipo!:string
    costo_dia!:number

    constructor(nombre_tipo:string, costo_dia:number){
        this.nombre_tipo=nombre_tipo
        this.costo_dia=costo_dia
    }

}