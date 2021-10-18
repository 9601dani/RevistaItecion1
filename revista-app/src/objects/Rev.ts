import { Byte } from "@angular/compiler/src/util";

export class Rev{
    archivo!:Byte[];

    constructor(archivo:Byte[]){
        this.archivo=archivo;   
    }
}