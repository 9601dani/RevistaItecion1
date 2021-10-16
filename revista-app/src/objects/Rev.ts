import { Byte } from "@angular/compiler/src/util";

export class Rev{
    archivo!:File[];

    constructor(archivo:File[]){
        this.archivo=archivo;   
    }
}