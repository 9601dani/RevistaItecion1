/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.modelsE;

/**
 *
 * @author daniel
 */
public class ComentarioMostrar {
    private int id_comentario;
    private String descripcion;
    private String fecha_comentario;
    private String nombre_usuario;
    private String nombre_autor;

    public ComentarioMostrar(int id_comentario, String descripcion, String fecha_comentario, String nombre_usuario, String nombre_autor) {
        this.id_comentario = id_comentario;
        this.descripcion = descripcion;
        this.fecha_comentario = fecha_comentario;
        this.nombre_usuario = nombre_usuario;
        this.nombre_autor = nombre_autor;
    }

    public int getId_comentario() {
        return id_comentario;
    }

    public void setId_comentario(int id_comentario) {
        this.id_comentario = id_comentario;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFecha_comentario() {
        return fecha_comentario;
    }

    public void setFecha_comentario(String fecha_comentario) {
        this.fecha_comentario = fecha_comentario;
    }

    public String getNombre_usuario() {
        return nombre_usuario;
    }

    public void setNombre_usuario(String nombre_usuario) {
        this.nombre_usuario = nombre_usuario;
    }

    public String getNombre_autor() {
        return nombre_autor;
    }

    public void setNombre_autor(String nombre_autor) {
        this.nombre_autor = nombre_autor;
    }
    
    
}
