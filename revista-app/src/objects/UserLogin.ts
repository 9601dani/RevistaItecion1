export class UserLogin {
    public nombre_usuario!: String;
    public password!: String;
    
    constructor(nombre_usuario:String, password:String){
        this.nombre_usuario=nombre_usuario;
        this.password= password;
    }

    get getNombreUsuario(){return this.nombre_usuario;}
    get getPassword(){return this.password;}
    set setNombreUsuario(nombre_usuario:String){this.nombre_usuario=nombre_usuario;}
    set setPassword(password:String){this.password=password;}
}