export class Recaudacion{
    registro!:number;
    nombre_revista!:string;
    total_pagar!:number;
    costo_con_descuento!:number;
    fecha_pago!:string;
    nombre_usuario!:string;
    autor!:string;

    constructor(registro:number,nombre_revista:string,total_pagar:number, costo_con_descuento:number, fecha_pago:string,nombre_usuario:string,autor:string) {
        this.registro = registro;
        this.nombre_revista = nombre_revista;
        this.total_pagar = total_pagar;
        this.costo_con_descuento = costo_con_descuento;
        this.fecha_pago = fecha_pago;
        this.nombre_usuario = nombre_usuario;
        this.autor=autor;
    }
}