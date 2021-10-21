import { Estado_Anun } from './ENUMS/Estado_Anun';
export class Anuncio{
    id_anuncio!:number;
    des_anuncio!:string;
    texto!:string;
    contenido!:string;
    apariciones!:number;
    total_pago!:number;
    estado_anuncio!:Estado_Anun;
    url!:string;
    fecha_inicio!:string;
    fecha_final!:string;
    nombre_usuario!:string;
    nombre_tipo!:string;
    
    constructor(id_anuncio:number,des_anuncio:string,texto:string,contenido:string,apariciones:number,total_pago:number, estado_anuncio:Estado_Anun,url:string,fecha_inicio:string, fecha_final:string,nombre_usuario:string,nombre_tipo:string){
        this.id_anuncio=id_anuncio
        this.des_anuncio=des_anuncio
        this.texto=texto
        this.contenido=contenido
        this.apariciones=apariciones
        this.total_pago=total_pago
        this.estado_anuncio=estado_anuncio
        this.url=url
        this.fecha_inicio=fecha_inicio
        this.fecha_final=fecha_final
        this.nombre_usuario=nombre_usuario
        this.nombre_tipo=nombre_tipo
    }

}