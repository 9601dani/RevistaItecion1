/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import java.util.Date;

/**
 *
 * @author daniel
 */
public class Comentario {
    private int id_comentario;
    private String descripcion;
    private String fecha_comentario;
    private int id_revista;
    private int id_suscripcion;
    //CONSTRUCTOR COMPLETO

    public Comentario(int id_comentario, String descripcion, String fecha_comentario, int id_revista, int id_suscripcion) {
        this.id_comentario = id_comentario;
        this.descripcion = descripcion;
        this.fecha_comentario = fecha_comentario;
        this.id_revista = id_revista;
        this.id_suscripcion = id_suscripcion;
    }
    //CONSTRUCTO MEDIO

    public Comentario(String descripcion, String fecha_comentario, int id_revista, int id_suscripcion) {
        this.descripcion = descripcion;
        this.fecha_comentario = fecha_comentario;
        this.id_revista = id_revista;
        this.id_suscripcion = id_suscripcion;
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

    public int getId_revista() {
        return id_revista;
    }

    public void setId_revista(int id_revista) {
        this.id_revista = id_revista;
    }

    public int getId_suscripcion() {
        return id_suscripcion;
    }

    public void setId_suscripcion(int id_suscripcion) {
        this.id_suscripcion = id_suscripcion;
    }
    
    
}
