import { Estado_Rev } from "./ENUMS/Estado_Rev";


export class AdmitirRevista {
    id_revista!: number;
    fecha_aceptacion!: Date;
    estado_revista!: Estado_Rev;
    costo_dia!: number;
    fecha_mod_costo!: Date;


    constructor(id_revista:number, fecha_aceptacion: Date, estado_revista: Estado_Rev, costo_dia: number, fecha_mod_costo: Date) {
        this.id_revista=id_revista;
        this.fecha_aceptacion = fecha_aceptacion;
        this.estado_revista = estado_revista;
        this.costo_dia = costo_dia;
        this.fecha_mod_costo = fecha_mod_costo;
    }
}