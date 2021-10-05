/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import com.mycompany.revista.Enum.ESTADO_ADM;

/**
 *
 * @author daniel
 */
public class Administrador {
    private String nombre_usuario;
    private String password;
    private String nombre;
    private ESTADO_ADM estado;

    public Administrador(String nombre_usuario, String password, String nombre, ESTADO_ADM estado) {
        this.nombre_usuario = nombre_usuario;
        this.password = password;
        this.nombre = nombre;
        this.estado = estado;
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

    public ESTADO_ADM getEstado() {
        return estado;
    }

    public void setEstado(ESTADO_ADM estado) {
        this.estado = estado;
    }
    
    
}
