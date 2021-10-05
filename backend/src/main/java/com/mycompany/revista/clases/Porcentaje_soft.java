/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import java.math.BigDecimal;
import java.util.Date;

/**
 *
 * @author daniel
 */
public class Porcentaje_soft {
    private int id_porcentaje;
    private BigDecimal porcentaje;
    private Date fecha_ultima_modificacion;
    private String nombre_usuario;
    
    //CONSTRUCTOR COMPLETO

    public Porcentaje_soft(int id_porcentaje, BigDecimal porcentaje, Date fecha_ultima_modificacion, String nombre_usuario) {
        this.id_porcentaje = id_porcentaje;
        this.porcentaje = porcentaje;
        this.fecha_ultima_modificacion = fecha_ultima_modificacion;
        this.nombre_usuario = nombre_usuario;
    }
    //CONSTRUCTOR PARCIAL

    public Porcentaje_soft(BigDecimal porcentaje, Date fecha_ultima_modificacion, String nombre_usuario) {
        this.porcentaje = porcentaje;
        this.fecha_ultima_modificacion = fecha_ultima_modificacion;
        this.nombre_usuario = nombre_usuario;
    }

    
    
    public int getId_porcentaje() {
        return id_porcentaje;
    }

    public void setId_porcentaje(int id_porcentaje) {
        this.id_porcentaje = id_porcentaje;
    }

    public BigDecimal getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(BigDecimal porcentaje) {
        this.porcentaje = porcentaje;
    }

    public Date getFecha_ultima_modificacion() {
        return fecha_ultima_modificacion;
    }

    public void setFecha_ultima_modificacion(Date fecha_ultima_modificacion) {
        this.fecha_ultima_modificacion = fecha_ultima_modificacion;
    }

    public String getNombre_usuario() {
        return nombre_usuario;
    }

    public void setNombre_usuario(String nombre_usuario) {
        this.nombre_usuario = nombre_usuario;
    }
    
}
