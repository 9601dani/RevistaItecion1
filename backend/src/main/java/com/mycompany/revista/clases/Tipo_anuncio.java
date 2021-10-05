/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import java.math.BigDecimal;

/**
 *
 * @author daniel
 */
public class Tipo_anuncio {
    private String nombre_tipo;
    private BigDecimal costo_dia;

    public Tipo_anuncio(String nombre_tipo, BigDecimal costo_dia) {
        this.nombre_tipo = nombre_tipo;
        this.costo_dia = costo_dia;
    }

    public String getNombre_tipo() {
        return nombre_tipo;
    }

    public void setNombre_tipo(String nombre_tipo) {
        this.nombre_tipo = nombre_tipo;
    }

    public BigDecimal getCosto_dia() {
        return costo_dia;
    }

    public void setCosto_dia(BigDecimal costo_dia) {
        this.costo_dia = costo_dia;
    }
    
    
}
