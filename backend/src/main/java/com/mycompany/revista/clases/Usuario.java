/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import com.mycompany.revista.Enum.TIP_USUARIO;
import java.sql.Blob;

/**
 *
 * @author daniel
 */
public class Usuario {
    private String nombre_usuario;
    private String password;
    private String nombre;
    private String des_personal;
    private String des_hobbies;
    private Blob foto;
    private TIP_USUARIO tipo_usuario;

    public Usuario(String nombre_usuario, String password, String nombre, String des_personal, String des_hobbies, Blob foto, TIP_USUARIO tipo_usuario) {
        this.nombre_usuario = nombre_usuario;
        this.password = password;
        this.nombre = nombre;
        this.des_personal = des_personal;
        this.des_hobbies = des_hobbies;
        this.foto = foto;
        this.tipo_usuario = tipo_usuario;
    }

    public Usuario(String nombre_usuario, String password, String nombre, TIP_USUARIO tipo_usuario) {
        this.nombre_usuario = nombre_usuario;
        this.password = password;
        this.nombre = nombre;
        this.tipo_usuario = tipo_usuario;
    }

    public Usuario(String nombre_usuario, String password) {
        this.nombre_usuario = nombre_usuario;
        this.password = password;
    }
    
    
    

    public String getNombre_usuario() {
        return nombre_usuario;
    }

    public void setNombre_usuario(String nombre_usuario) {
        this.nombre_usuario = nombre_usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDes_personal() {
        return des_personal;
    }

    public void setDes_personal(String des_personal) {
        this.des_personal = des_personal;
    }

    public String getDes_hobbies() {
        return des_hobbies;
    }

    public void setDes_hobbies(String des_hobbies) {
        this.des_hobbies = des_hobbies;
    }

    public Blob getFoto() {
        return foto;
    }

    public void setFoto(Blob foto) {
        this.foto = foto;
    }
    
    public TIP_USUARIO getTipo_usuario() {
        return tipo_usuario;
    }

    public void setTipo_usuario(TIP_USUARIO tipo_usuario) {
        this.tipo_usuario = tipo_usuario;
    }
    
    
}
