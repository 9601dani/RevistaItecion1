import { UserType } from "./UserType";

export class UserComplete{
    public nombre_usuario!: String;
    public password!: String;
    public nombre!: String;
    public des_personal!:String;
    public des_hobbies!:String;
    public foto!:Blob;
    public tipo_usuario!: UserType;

    
    constructor(nombre_usuario:String, password:String,nombre:String,des_personal:String,des_hobbies:String, foto:Blob,tipo_usuario:UserType){
        this.nombre_usuario=nombre_usuario;
        this.password= password;
        this.nombre=nombre;
        this.des_personal=des_personal;
        this.des_hobbies=des_hobbies;
        this.foto=foto;
        this.tipo_usuario=tipo_usuario;
    }

    get getNombreUsuario(){return this.nombre_usuario;}
    get getPassword(){return this.password;}
    set setNombreUsuario(nombre_usuario:String){this.nombre_usuario=nombre_usuario;}
    set setPassword(password:String){this.password=password;}
}

