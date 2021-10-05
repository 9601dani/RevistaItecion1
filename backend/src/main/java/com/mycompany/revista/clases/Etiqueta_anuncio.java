/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

/**
 *
 * @author daniel
 */
public class Etiqueta_anuncio {
    private String nombre_etiqueta;
    private int id_anuncio;

    public Etiqueta_anuncio(String nombre_etiqueta, int id_anuncio) {
        this.nombre_etiqueta = nombre_etiqueta;
        this.id_anuncio = id_anuncio;
    }

    public String getNombre_etiqueta() {
        return nombre_etiqueta;
    }

    public void setNombre_etiqueta(String nombre_etiqueta) {
        this.nombre_etiqueta = nombre_etiqueta;
    }

    public int getId_anuncio() {
        return id_anuncio;
    }

    public void setId_anuncio(int id_anuncio) {
        this.id_anuncio = id_anuncio;
    }
    
    
}
