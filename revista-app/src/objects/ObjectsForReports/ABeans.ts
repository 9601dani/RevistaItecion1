import { Usuario } from './Usuario';
import { Comentario } from "../Comentario";
import { Recaudacion } from "../Recaudacion";
import { Revista } from "../Revista";
import { Suscripcion } from "../Suscripcion";

export class ABeans{
    id_revista!:number;
    totalGains!:number;
    totalApariciones!:number;
    magazineName!:string;
    revistaList!:Array<Revista>;
    listaComents!:Array<Comentario> ;
    listaSuscripcion!:Array<Suscripcion>;
    listaAutor!:Array<Recaudacion>;
    listUser!:Array<Usuario>;

    constructor(id_revista:number,magazineName:string) {
        this.id_revista = id_revista;
        this.magazineName = magazineName;
    }


}