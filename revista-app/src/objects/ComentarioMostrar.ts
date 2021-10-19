export class ComentarioMostrar{
     id_comentario!:number;
     descripcion!:string;
     fecha_comentario!:string;
     nombre_usuario!:string;
     nombre_autor!:string;

     constructor(id_comentario:number, descripcion:string,fecha_comentario:string,nombre_usuario:string, nombre_autor:string){
         this.id_comentario=id_comentario
         this.descripcion=descripcion
         this.fecha_comentario=fecha_comentario
         this.nombre_usuario=nombre_usuario
         this.nombre_autor=nombre_autor

     }
}