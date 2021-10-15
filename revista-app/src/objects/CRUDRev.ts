import { Comentario_E } from "./ENUMS/Comentario_E";
import { Estado_Rev } from "./ENUMS/Estado_Rev";
import { Me_Gusta_E } from "./ENUMS/Me_Gusta_E";
import { Suscrip_E } from "./ENUMS/Suscrip_E";

export class CRUDRev {
    id_revista!: number;
    nombre_revista!: string;
    descripcion!: string;
    costo_suscripcion!: number;
    me_gusta!: Me_Gusta_E;
    comentario !: Comentario_E;
    suscripciones!: Suscrip_E;

    constructor(id_revista:number,nombre_revista: string, descripcion: string, costo_suscripcion: number, me_gusta: Me_Gusta_E, comentario: Comentario_E, suscripciones: Suscrip_E) {
        this.id_revista=id_revista;
        this.nombre_revista = nombre_revista;
        this.descripcion = descripcion;
        this.costo_suscripcion = costo_suscripcion;
        this.me_gusta = me_gusta;
        this.comentario = comentario;
        this.suscripciones = suscripciones;
    }
}