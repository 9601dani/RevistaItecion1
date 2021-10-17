/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.modelsE;

import com.mycompany.revista.clases.Etiqueta;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class RevistaInfoForUser {
    private String descripcion;
    private String categoria;
    private ArrayList<Etiqueta> etiquetas;
    private String nombre_usuario;
    private int cantidad_like;

    public RevistaInfoForUser(String descripcion, String categoria, ArrayList<Etiqueta> etiquetas, String nombre_usuario, int cantidad_like) {
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.etiquetas = etiquetas;
        this.nombre_usuario = nombre_usuario;
        this.cantidad_like = cantidad_like;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public ArrayList<Etiqueta> getEtiquetas() {
        return etiquetas;
    }

    public void setEtiquetas(ArrayList<Etiqueta> etiquetas) {
        this.etiquetas = etiquetas;
    }

    public String getNombre_usuario() {
        return nombre_usuario;
    }

    public void setNombre_usuario(String nombre_usuario) {
        this.nombre_usuario = nombre_usuario;
    }

    public int getCantidad_like() {
        return cantidad_like;
    }

    public void setCantidad_like(int cantidad_like) {
        this.cantidad_like = cantidad_like;
    }
    
    
}
