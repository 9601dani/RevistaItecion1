

export class Comentario{
    id_comentario!:number
    descripcion!:string
    fecha_comentario!:string
    id_revista!:number
    id_suscripcion!:number
    
    constructor(id_comentario:number,descripcion:string, fecha_comentario:string,id_revista:number,id_suscripcion:number){
       this.id_comentario=id_comentario
       this.descripcion=descripcion
       this.fecha_comentario=fecha_comentario
       this.id_revista=id_revista
       this.id_suscripcion=id_suscripcion 

    }
}