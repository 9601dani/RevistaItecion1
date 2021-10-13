import { Comentario_E } from "./ENUMS/Comentario_E";
import { Estado_Rev } from "./ENUMS/Estado_Rev";
import { Me_Gusta_E } from "./ENUMS/Me_Gusta_E";
import { Suscrip_E } from "./ENUMS/Suscrip_E";

export class Revista {
    id_revista!: Number;
    nombre_revista!: String;
    archivo!: Blob;
    fecha_publicacion!: Date;
    descripcion!: String;
    fecha_aceptacion!: Date;
    estado_revista!: Estado_Rev;
    costo_dia!: Number;
    fecha_mod_costo!: Date;
    costo_suscripcion!: Number;
    me_gusta!: Me_Gusta_E;
    comentario !: Comentario_E;
    suscripciones!: Suscrip_E;
    nombre_categoria!: String;
    nombre_usuario!: String;

    constructor(id_revista:Number,nombre_revista: String, archivo: Blob, fecha_publicacion: Date, descripcion: String, fecha_aceptacion: Date, estado_revista: Estado_Rev, costo_dia: Number, fecha_mod_costo: Date, costo_suscripcion: Number, me_gusta: Me_Gusta_E, comentario: Comentario_E, suscripciones: Suscrip_E, nombre_categoria: String, nombre_usuario: String) {
        this.id_revista=id_revista;
        this.nombre_revista = nombre_revista;
        this.archivo = archivo;
        this.fecha_publicacion = fecha_publicacion;
        this.descripcion = descripcion;
        this.fecha_aceptacion = fecha_aceptacion;
        this.estado_revista = estado_revista;
        this.costo_dia = costo_dia;
        this.fecha_mod_costo = fecha_mod_costo;
        this.costo_suscripcion = costo_suscripcion;
        this.me_gusta = me_gusta;
        this.comentario = comentario;
        this.suscripciones = suscripciones;
        this.nombre_categoria = nombre_categoria;
        this.nombre_usuario = nombre_usuario;
    }
}