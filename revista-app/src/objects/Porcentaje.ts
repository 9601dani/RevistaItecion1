export class Porcentaje{
    id_porcentaje!:number;
    porcentaje!:number;
    fecha_ultima_modificacion!:string;
    nombre_usuario!:string;

    constructor(id_porcentaje:number, porcentaje:number, fecha_mod:string, nombre_usuario:string){
        this.id_porcentaje=id_porcentaje;
        this.porcentaje=porcentaje;
        this.fecha_ultima_modificacion=fecha_mod;
        this.nombre_usuario=nombre_usuario;
    }
}