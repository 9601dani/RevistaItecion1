/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

/**
 *
 * @author daniel
 */
public class Etiqueta_revista {
    private String nombre_etiqueta;
    private int id_revista;

    public Etiqueta_revista(String nombre_etiqueta, int id_revista) {
        this.nombre_etiqueta = nombre_etiqueta;
        this.id_revista = id_revista;
    }

    public String getNombre_etiqueta() {
        return nombre_etiqueta;
    }

    public void setNombre_etiqueta(String nombre_etiqueta) {
        this.nombre_etiqueta = nombre_etiqueta;
    }

    public int getId_revista() {
        return id_revista;
    }

    public void setId_revista(int id_revista) {
        this.id_revista = id_revista;
    }
    
    
}
