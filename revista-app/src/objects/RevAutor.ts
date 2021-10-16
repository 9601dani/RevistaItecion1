import { Byte } from "@angular/compiler/src/util";
import { Comentario_E } from "./ENUMS/Comentario_E";
import { Estado_Rev } from "./ENUMS/Estado_Rev";
import { Me_Gusta_E } from "./ENUMS/Me_Gusta_E";
import { Suscrip_E } from "./ENUMS/Suscrip_E";

export class RevAutor {
    id_revista!: number;
    nombre_revista!: string;
    archivo!:File;
    fecha_publicacion!: Date;
    descripcion!: string;
    estado_revista!: Estado_Rev;
    costo_dia!: number;
    costo_suscripcion!: number;
    me_gusta!: Me_Gusta_E;
    comentario !: Comentario_E;
    suscripciones!: Suscrip_E;
    nombre_categoria!: string;

    constructor(id_revista:number,nombre_revista: string,archivo:File, fecha_publicacion: Date, descripcion: string, estado_revista: Estado_Rev, costo_dia: number, costo_suscripcion: number, me_gusta: Me_Gusta_E, comentario: Comentario_E, suscripciones: Suscrip_E, nombre_categoria: string) {
        this.id_revista=id_revista;
        this.nombre_revista = nombre_revista;
        this.archivo=archivo;
        this.fecha_publicacion = fecha_publicacion;
        this.descripcion = descripcion;
        this.estado_revista = estado_revista;
        this.costo_dia = costo_dia;
        this.costo_suscripcion = costo_suscripcion;
        this.me_gusta = me_gusta;
        this.comentario = comentario;
        this.suscripciones = suscripciones;
        this.nombre_categoria = nombre_categoria;
    }
}