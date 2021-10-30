import { Recaudacion } from "../Recaudacion";

export class OtherMagazineBeans{
    magazineRecord!:number;
    nombreRevista!:string
    dayCost!:number;
    totalDayCost!:number;
    gananciaTotal!:number;
    subscriptionList!:Array<Recaudacion>;

    constructor(magazineRecord:number, nombreRevista:string,dayCost:number, totalDayCost:number, gananciaTotal:number,subscriptionList:Array<Recaudacion> ) {
        this.magazineRecord = magazineRecord;
        this.nombreRevista=nombreRevista
        this.dayCost = dayCost;
        this.totalDayCost=totalDayCost
        this.gananciaTotal=gananciaTotal
        this.subscriptionList=subscriptionList
    }
}