import { Recaudacion } from "../Recaudacion";

export class OtherMagazineBeans{
    magazineRecord!:number;
    dayCost!:number;
    totalDayCost!:number;
    gananciaTotal!:number;
    subscriptionList!:Array<Recaudacion>;

    constructor(magazineRecord:number, dayCost:number, totalDayCost:number, gananciaTotal:number,subscriptionList:Array<Recaudacion> ) {
        this.magazineRecord = magazineRecord;
        this.dayCost = dayCost;
        this.totalDayCost=totalDayCost
        this.gananciaTotal=gananciaTotal
        this.subscriptionList=subscriptionList
    }
}