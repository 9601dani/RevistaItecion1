import { Me_Gusta_Suscripcion } from './ENUMS/Me_Gusta_Suscripcion';
import { Estado_Sus } from './ENUMS/Estado_Sus';

export class Suscripcion{
    id_suscripcion!:number
    valor_sus!:number;
    fecha_inicial !:string;
    fecha_final!:string;
    me_gusta!:Me_Gusta_Suscripcion;
    estado_suscripcion!:Estado_Sus;
    nombre_usuario!:string;
     id_revista!: number;

    constructor(id_suscripcion:number,valor_sus:number, fecha_inicial:string,fecha_final:string,me_gusta:Me_Gusta_Suscripcion,estado_suscripcion:Estado_Sus, nombre_usuario:string, id_revista:number){
        this.id_suscripcion=id_suscripcion
        this.valor_sus=valor_sus
        this.fecha_inicial=fecha_inicial
        this.fecha_final=fecha_final
        this.me_gusta=me_gusta
        this.estado_suscripcion=estado_suscripcion
        this.nombre_usuario=nombre_usuario
        this.id_revista=id_revista
    }
}