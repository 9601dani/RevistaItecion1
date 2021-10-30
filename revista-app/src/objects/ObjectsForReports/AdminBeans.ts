import { Comentario } from "../Comentario";
import { Revista } from "../Revista";

export class AdminBeans{
    id_revista!:number;
    totalApariciones!:number;
    totalGains!:number;
    magazineName!:string;
    revistaList!:Array<Revista>;
    listaComents!:Array<Comentario>;
    
    constructor(id_revista:number,totalApariciones:number, totalGains:number,magazineName:string,revistaList:Revista[],listaComents:Comentario[]) {
        this.id_revista = id_revista;
        this.totalApariciones=totalApariciones;
        this.totalGains=totalGains
        this.magazineName=magazineName
        this.revistaList=revistaList
        this.listaComents=listaComents
    }
}