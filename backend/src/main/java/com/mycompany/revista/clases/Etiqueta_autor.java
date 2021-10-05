/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

/**
 *
 * @author daniel
 */
public class Etiqueta_autor {
    private String nombre_etiqueta;
    private String nombre_usuario;

    public Etiqueta_autor(String nombre_etiqueta, String nombre_usuario) {
        this.nombre_etiqueta = nombre_etiqueta;
        this.nombre_usuario = nombre_usuario;
    }

    public String getNombre_etiqueta() {
        return nombre_etiqueta;
    }

    public void setNombre_etiqueta(String nombre_etiqueta) {
        this.nombre_etiqueta = nombre_etiqueta;
    }

    public String getNombre_usuario() {
        return nombre_usuario;
    }

    public void setNombre_usuario(String nombre_usuario) {
        this.nombre_usuario = nombre_usuario;
    }
    
    
    
}
