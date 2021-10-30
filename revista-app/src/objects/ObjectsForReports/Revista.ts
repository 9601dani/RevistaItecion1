import { Comentario_E } from '../ENUMS/Comentario_E';
import { Me_Gusta_E } from '../ENUMS/Me_Gusta_E';
import { Suscrip_E } from '../ENUMS/Suscrip_E';
import { Estado_Rev } from './../ENUMS/Estado_Rev';
export class Revista {
    id_revista!: number;
    nombre_revista!: string;
    archivo!: string;
    arch!: string;
    fecha_publicacion!: string;
    descripcion!: string;
    fecha_aceptacion!: string;
    estado_revista!: Estado_Rev;
    costo_dia!: number;
    fecha_mod_costo!: string;
    costo_suscripcion!: number;
    me_gusta!: Me_Gusta_E;
    comentario!: Comentario_E;
    suscripciones!: Suscrip_E;
    nombre_categoria!: string;
    nombre_usuario!: string;

    constructor(id_revista: number, nombre_revista: string, archivo: string, fecha_publicacion: string, descripcion: string, estado_revista: Estado_Rev, costo_suscripcion: number, me_gusta: Me_Gusta_E, comentario: Comentario_E, suscripciones: Suscrip_E, nombre_categoria: string) {
        this.id_revista = id_revista;
        this.nombre_revista = nombre_revista;
        this.archivo = archivo;
        this.fecha_publicacion = fecha_publicacion;
        this.descripcion = descripcion;
        this.estado_revista = estado_revista;
        this.costo_suscripcion = costo_suscripcion;
        this.me_gusta = me_gusta;
        this.comentario = comentario;
        this.suscripciones = suscripciones;
        this.nombre_categoria = nombre_categoria;
    }

}